import { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    setFormStatus('submitting');
    
    // Simulação de envio (em um app real, isso seria substituído por uma chamada de API)
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <>
      <SEO
        title="Contato"
        description="Entre em contato com a equipe do ConvertPDF. Estamos aqui para responder suas perguntas, ouvir seu feedback e ajudar com qualquer problema."
        keywords="contato, suporte, ajuda, feedback, perguntas frequentes"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Entre em Contato
            </h1>
            <p className="text-xl mb-0 text-blue-100">
              Estamos aqui para ajudar. Envie-nos uma mensagem e responderemos o mais breve possível.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="md:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 h-full">
                  <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">E-mail</h3>
                        <p className="text-gray-600">contato@convertpdf.com.br</p>
                        <p className="text-gray-600">suporte@convertpdf.com.br</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-100 p-3 rounded-full mr-4">
                        <Phone className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Telefone</h3>
                        <p className="text-gray-600">+55 (11) 3456-7890</p>
                        <p className="text-gray-600">Segunda a Sexta, 9h às 18h</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-3 rounded-full mr-4">
                        <MapPin className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Endereço</h3>
                        <p className="text-gray-600">
                          Av. Paulista, 1000, Sala 301<br />
                          Bela Vista, São Paulo - SP<br />
                          CEP: 01310-100
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-3">Siga-nos</h3>
                    <div className="flex space-x-3">
                      <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                        <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>
                      <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                        <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                        <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm-3.11 8.33c.18-.374.525-.674.933-.674h4.354c.408 0 .752.3.933.674L16.5 13.33c.18.374.18.813 0 1.187l-1.39 2.998c-.18.375-.525.675-.933.675H9.823c-.408 0-.752-.3-.933-.675l-1.39-2.998c-.18-.374-.18-.813 0-1.187l1.39-3z" />
                        </svg>
                      </a>
                      <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                        <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="md:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6">Envie-nos uma Mensagem</h2>
                  
                  {formStatus === 'success' ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Mensagem Enviada!</h3>
                      <p className="text-gray-600 mb-4">
                        Obrigado por entrar em contato. Recebemos sua mensagem e responderemos em breve.
                      </p>
                      <button
                        onClick={() => setFormStatus('idle')}
                        className="btn btn-primary"
                      >
                        Enviar Nova Mensagem
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Nome Completo *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            E-mail *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Assunto
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Selecione um assunto</option>
                          <option value="suporte">Suporte Técnico</option>
                          <option value="feedback">Feedback</option>
                          <option value="parceria">Proposta de Parceria</option>
                          <option value="imprensa">Imprensa</option>
                          <option value="outro">Outro</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Mensagem *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        ></textarea>
                      </div>
                      
                      {formStatus === 'error' && (
                        <div className="flex items-center text-red-600 bg-red-50 p-3 rounded-md">
                          <AlertCircle className="h-5 w-5 mr-2" />
                          <span>{errorMessage}</span>
                        </div>
                      )}
                      
                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className={`btn btn-primary flex items-center justify-center ${
                          formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                      >
                        {formStatus === 'submitting' ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Enviar Mensagem
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="mt-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Encontre respostas para as perguntas mais comuns sobre nossos serviços.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Como posso converter um PDF para Word?</h3>
                    <p className="text-gray-600">
                      Acesse nossa ferramenta de conversão PDF para Word, faça o upload do seu arquivo, clique em "Converter" e baixe o resultado. Todo o processo é gratuito e não requer cadastro.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Meus arquivos são seguros?</h3>
                    <p className="text-gray-600">
                      Sim, seus arquivos são processados localmente no seu navegador e não são enviados para nossos servidores. Após a conversão, os arquivos são automaticamente excluídos.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Qual é o tamanho máximo de arquivo suportado?</h3>
                    <p className="text-gray-600">
                      O tamanho máximo varia de acordo com a ferramenta, mas geralmente suportamos arquivos de até 100MB. Para arquivos maiores, recomendamos dividir o documento em partes menores.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Preciso instalar algum software?</h3>
                    <p className="text-gray-600">
                      Não, todas as nossas ferramentas funcionam diretamente no seu navegador. Não é necessário instalar nenhum software adicional.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Como posso reportar um problema?</h3>
                    <p className="text-gray-600">
                      Você pode reportar problemas através do formulário de contato acima ou enviando um e-mail diretamente para suporte@convertpdf.com.br.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Vocês oferecem planos premium?</h3>
                    <p className="text-gray-600">
                      Sim, oferecemos planos premium para usuários corporativos que necessitam de recursos avançados, maior capacidade de processamento ou suporte prioritário.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;