import React from 'react'

export function IconeSalvar(props) {
	return <div className={'container-iconeSalvar'}>
			<img alt={'Salvar'} src={props.iconeparasalvar} onClick={props.onClickSalvar}/>
		</div>
}