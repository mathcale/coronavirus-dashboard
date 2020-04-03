import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Card } from '../Cards/Card';
import { getMessage } from '../../lang';

export const Loading = props => (
  <Card content>
    <p><FontAwesomeIcon icon={faSpinner} spin /> {getMessage('LOADING', props.lang)}</p>
  </Card>
);
