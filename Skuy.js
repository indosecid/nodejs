class SkuyJs{

	
	_inputValidate(options){
		
		const type = options.type;
		if (type === 'minimalInput') {
			
			let {
				min, inputEl, errEl
			} = options;

			$(inputEl).on('keyup', (e) => {

				if (e.target.value.length < min){
					$(errEl).html('<span style="color:red"> Panjang Minimum '+min+' Karakter</span>');
				}else if(e.target.value === '' || e.target.value.length === 0 || e.target.value === null){
					$(errEl).html('');
				}else{
					$(errEl).html('');
				}
				console.log(e.target.value);
			})
		}
	}
}