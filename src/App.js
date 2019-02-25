import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Api from './Api'
import './App.scss'
import List from './components/list/List'
import Modal from './components/modal/Modal'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			errorMessage: null,
			showModal: false,
			data: []
		}
	}

	componentDidMount() {
		Api.getData().then((res) => {
			this.setState({ data: res.data })
		})
	}

	handleShowModal = () => {
		const { showModal } = this.state

		this.setState({
			showModal: !!!showModal,
			errorMessage: null
		})
	}

	addItem = (val) => {
		const { data } = this.state

		const item = { text: val }

		if (!val) {
			this.setState({ errorMessage: 'Please type an item text.' })
		} else {
			Api.addItem(item)
				.then((res) => {
					data.push(res.data)

					this.setState({ data, showModal: false, errorMessage: null })
				})
				.catch((error) => {
					this.setState({ errorMessage: error.message })
				})
		}
	}

	handleRemove = (id) => {
		const remainder = this.state.data.filter((item) => {
			if (item.id !== id) return item
		})

		Api.removeItem(id).then((res) => {
			this.setState({ data: remainder })
		})
	}

	render() {
		const { showModal, data, errorMessage } = this.state

		return (
			<div className="App">
				<div className="container">
					<div className="title">
						<h1>Supermarket List</h1>
						<p>{data.length} items</p>
					</div>
					<List items={data} remove={this.handleRemove} />
					<div className="btn btn-modal" onClick={this.handleShowModal}>
						Add Item
					</div>
				</div>

				<ReactCSSTransitionGroup
					transitionName="modalTransition"
					transitionEnterTimeout={250}
					transitionLeaveTimeout={250}
				>
					{showModal ? (
						<div className="modal-container">
							<Modal
								addItem={this.addItem}
								onHandleShowModal={this.handleShowModal}
								errorMessage={errorMessage}
							/>
						</div>
					) : null}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}

export default App
