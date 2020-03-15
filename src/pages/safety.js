import { Container } from '../components';

const SafetyPage = () => {
  return (
    <Container absoluteCenter>
      <h1>Stay Safe!</h1>

      <div className="content">
        <p>It's clear that this virus is a huge problem and that it's affecting the world world, but <strong>don't panic!</strong> While there are no treatment for the COVID-19 yet, we should follow some basic rules:</p>

        <ul>
          <li>🧼👏 Wash your hands with clear water and soap or hands sanitizer;</li>
          <li>🏟🚉 Avoid crowded places like concerts, theaters, public transports and so on;</li>
          <li>😷🩺 Go to the doctor if you're feeling any of the symptoms;</li>
          <li>💧🍎 Drink water and eat healthy;</li>
        </ul>

        <p>For more info, take a look at the <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank">official World Health Organization's COVID-19 page</a>.</p>
      </div>
    </Container>
  );
};

export default SafetyPage;
