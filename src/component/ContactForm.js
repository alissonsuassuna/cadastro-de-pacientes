import React, {useState, useEffect} from 'react'

const ContactForm = (props) => {

    const initialFieldValues = {
        fullName: '',
        celPhone: '',
        email: '',
        address: ''
    }

    let [values, setValues] = useState(initialFieldValues)
    
    useEffect( () => {
        if(props.currentId == '') {
            setValues({
                ...initialFieldValues
            })
        } else {
            setValues({
                ...props.contactObjects[props.currentId]
            })
        }
    }, [props.currentId, props.contactObjects] )


    const handleInputChange = e => {
        let { name, value} = e.target
        
        setValues({
            ...values,
            [name]: value
        })
    }
    
    const handleFormSubmit = e => {
        e.preventDefault()
        props.addOrdit(values)
    }
    

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Nome Completo" name="fullName" value={values.fullName} 
                onChange={handleInputChange} />
            </div>

            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Celular" name="celPhone" value={values.celPhone} onChange={handleInputChange} />
                </div>


                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="E-mail" name="email" value={values.email} onChange={handleInputChange} />
                </div>
            </div>
            <div className="form-gruop">
                <textarea className="form-control" placeholder="Endereço" name="address" value={values.address} onChange={handleInputChange} />
            </div>

            <div className="form-group mt-2">
                <input type="submit" value={props.currentId == '' ? "Salvar" : "Atualizar"} className="btn btn-primary btn-block" />
            </div>
        </form>
    )
}

export default ContactForm