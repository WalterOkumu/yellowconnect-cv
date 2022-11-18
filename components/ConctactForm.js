
export default function ContactForm() {
    return (
      <div className="my-32 mx-auto w-full flex items-center justify-center flex-col">
            <h3 className="text-4xl font-bold mb-8 md:w-[100%] md:text-left text-center">
                Preencha os campos abaixo para obter mais vantagens com o nosso serviço
            </h3>
            <div id="mlb2-5786909" className="text-center ml-form-embedContainer ml-subscribe-form ml-subscribe-form-5786909">
                <div className="ml-form-align-center">
                    <div className="ml-form-embedWrapper embedForm">
                    <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                        <div className="ml-form-embedContent" style={{marginBottom:0}}></div>
                        <form className="ml-block-form" action="https://static.mailerlite.com/webforms/submit/u5v1y5" data-code="u5v1y5" method="post" target="_blank">
                        <div className="ml-form-formContent">
                            <div className="ml-form-fieldRow">
                            <div className="ml-field-group ml-field-name">
                                <input aria-label="name" type="text" className="form-control" data-inputmask="" name="fields[name]" placeholder="Nome" autoComplete="name" />
                            </div>
                            </div>
                            <div className="ml-form-fieldRow">
                            <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                                <input aria-label="email" aria-required="true" type="email" className="form-control" data-inputmask="" name="fields[email]" placeholder="E-mail" autoComplete="email" />
                            </div>
                            </div>
                            <div className="ml-form-fieldRow ml-last-item">
                            <div className="ml-field-group ml-field-company">
                                <input aria-label="company" type="text" className="form-control" data-inputmask="" name="fields[company]" placeholder="Empresa" autoComplete="" />
                            </div>
                            </div>
                        </div>
                        <input type="hidden" name="ml-submit" value="1" />
                        <div className="ml-form-embedSubmit">
                            <button type="submit" className="primary">Enviar</button>
                            <button disabled="disabled" style={{display:'none'}} type="button" className="loading"> <div className="ml-form-embedSubmitLoad"></div> <span className="sr-only">Carregando...</span> </button>
                        </div>
                        <input type="hidden" name="anticsrf" value="true" />
                        </form>
                    </div>
                    <div className="ml-form-successBody row-success" style={{display:'none'}}>
                        <div className="ml-form-successContent">
                        <h4>Obrigado!</h4>
                        <p>Enviaremos sua proposta o mais rápido possível.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
      </div>
    );
}