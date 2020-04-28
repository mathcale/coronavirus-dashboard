import { Card } from '../components';

const SafetyPage = props => {
  return (
    <>
      <h1 style={{ marginBottom: 20 }}>Informações e Dicas</h1>

      <div className="row">
        <div className="col-md-4 col-xs-12" style={{ marginBottom: 20 }}>
          <Card content>
            <h2>O que é COVID-19?</h2>

            <p>A COVID-19 é uma doença causada pelo coronavírus SARS-CoV-2, que apresenta um quadro clínico que varia de infecções assintomáticas a quadros respiratórios graves. De acordo com a Organização Mundial de Saúde (OMS), a maioria dos pacientes com COVID-19 (cerca de 80%) podem ser assintomáticos e cerca de 20% dos casos podem requerer atendimento hospitalar por apresentarem dificuldade respiratória e desses casos aproximadamente 5% podem necessitar de suporte para o tratamento de insuficiência respiratória (suporte ventilatório).</p>
          </Card>
        </div>

        <div className="col-md-4 col-xs-12" style={{ marginBottom: 20 }}>
          <Card content>
            <h2>Quais são os sintomas?</h2>

            <p>Os sintomas da COVID-19 podem variar de um simples resfriado até uma pneumonia severa. Sendo os sintomas mais comuns:</p>

            <ul>
              <li>Tosse</li>
              <li>Febre</li>
              <li>Coriza</li>
              <li>Dor de garganta</li>
              <li>Dificuldade para respirar</li>
            </ul>
          </Card>
        </div>

        <div className="col-md-4 col-xs-12" style={{ marginBottom: 20 }}>
          <Card content>
            <h2>Como é transmitido?</h2>

            <p>A transmissão acontece de uma pessoa doente para outra ou por contato próximo por meio de: </p>

            <ul>
              <li>Toque do aperto de mão</li>
              <li>Gotículas de saliva</li>
              <li>Espirro</li>
              <li>Tosse</li>
              <li>Catarro</li>
              <li>Objetos ou superfícies contaminadas, como celulares, mesas, maçanetas, brinquedos, teclados de computador etc</li>
            </ul>
          </Card>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 col-xs-12" style={{ marginBottom: 20 }}>
          <Card content>
            <h2>Recomendações de Prevenção</h2>

            <ul>
              <li>Lave com frequência as mãos até a altura dos punhos, com água e sabão, ou então higienize com álcool em gel 70%</li>
              <li>Ao tossir ou espirrar, cubra nariz e boca com lenço ou com o braço, e não com as mãos</li>
              <li>Evite tocar olhos, nariz e boca com as mãos não lavadas</li>
              <li>Ao tocar, lave sempre as mãos como já indicado</li>
              <li>Mantenha uma distância mínima de cerca de 2 metros de qualquer pessoa tossindo ou espirrando</li>
              <li>Evite abraços, beijos e apertos de mãos Adote um comportamento amigável sem contato físico, mas sempre com um sorriso no rosto</li>
              <li>Higienize com frequência o celular e os brinquedos das crianças</li>
              <li>Não compartilhe objetos de uso pessoal, como talheres, toalhas, pratos e copos</li>
              <li>Mantenha os ambientes limpos e bem ventilados</li>
              <li>Evite circulação desnecessária nas ruas, estádios, teatros, shoppings, shows, cinemas e igrejas Se puder, fique em casa</li>
              <li>Se estiver doente, evite contato físico com outras pessoas, principalmente idosos e doentes crônicos, e fique em casa até melhorar</li>
              <li>Durma bem e tenha uma alimentação saudável</li>
              <li>Utilize máscaras caseiras ou artesanais feitas de tecido em situações de saída de sua residência</li>
            </ul>
          </Card>
        </div>

        <div className="col-md-4 col-xs-12">
          <Card content>
            <h2>Serviços e Utilidades</h2>

            <ul>
              <li><a href="https://coronavirus.saude.gov.br/" target="_blank">Página oficial do Min. da Saúde</a></li>
              <li><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank">Página oficial da Organização Mundial de Saúde</a></li>
              <li><a href="https://www.saude.gov.br/fakenews" target="_blank">Cuidado com as Fake News! - Min. da Saúde</a></li>
              <li><a href="http://portal.anvisa.gov.br/documents/219201/4340788/NT+M%C3%A1scaras.pdf/bf430184-8550-42cb-a975-1d5e1c5a10f7" target="_blank">Como confeccionar e usar máscaras caseiras - ANVISA</a></li>
              <li><a href="https://portalarquivos.saude.gov.br/images/pdf/2020/April/18/postos-de-sa--de-com-endere--o.pdf" target="_blank">Lista de postos de saúde no Brasil - Min. da Saúde</a></li>
            </ul>

            <p className="source"><strong>Fonte:</strong> <a href="https://coronavirus.saude.gov.br/index.php/sobre-a-doenca" target="_blank">Ministério da Saúde</a></p>
          </Card>
        </div>
      </div>
    </>
  )
};

export default SafetyPage;
