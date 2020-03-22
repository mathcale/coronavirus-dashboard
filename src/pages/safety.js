import { Container } from '../components';
import { getMessage } from '../lang';

const SafetyPage = props => {
  return (
    <Container absoluteCenter>
      <h1>{getMessage('SAFETY_PAGE_TITLE', props.lang)}</h1>

      <div className="content">
        <p dangerouslySetInnerHTML={{ __html: getMessage('SAFETY_FIRST_PARAGRAPH', props.lang) }} />

        <ul>
          <li>🧼👏 {getMessage('SAFETY_TIP_ONE', props.lang)}</li>
          <li>🏟🚉 {getMessage('SAFETY_TIP_TWO', props.lang)}</li>
          <li>😷🩺 {getMessage('SAFETY_TIP_THREE', props.lang)}</li>
          <li>💧🍎 {getMessage('SAFETY_TIP_FOUR', props.lang)}</li>
        </ul>

        <p dangerouslySetInnerHTML={{ __html: getMessage('SAFETY_SECOND_PARAGRAPH', props.lang) }} />
      </div>
    </Container>
  );
};

export default SafetyPage;
