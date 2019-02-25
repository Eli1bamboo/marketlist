import React, { Component } from 'react'

class Modal extends Component {
	constructor(props) {
		super(props)

		this.state = {
			value: null
		}
	}

	handleChange = (e) => {
		this.setState({
			value: e.target.value
		})
	}

	handleOnSubmit = (e) => {
		e.preventDefault()
		const { addItem } = this.props
		const { value } = this.state

		addItem(value)
	}

	render() {
		const { onHandleShowModal, errorMessage } = this.props

		return (
			<form onSubmit={this.handleOnSubmit}>
				<div className="formHeader">
					<h3>Add Item</h3>
				</div>
				<input id="value" onChange={this.handleChange} />
				{errorMessage && errorMessage.length ? <small className="errors">{errorMessage}</small> : null}

				<div className="formActions">
					<div className="btn btn-cancel" onClick={onHandleShowModal}>
						CANCEL
					</div>
					<button type="submit" className="btn btn-add">
						ADD
					</button>
				</div>
			</form>
		)
	}
}

export default Modal
