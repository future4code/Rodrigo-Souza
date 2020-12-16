import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends React.Component {
	state = {

		texto: ""

	}

	onChangeComentario = (event) => {
		this.setState({texto: event.target.value});
	}

	

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.value}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}

}

