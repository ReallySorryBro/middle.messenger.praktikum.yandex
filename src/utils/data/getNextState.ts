import { validateFieldById } from '../validation';

interface StateProps {
  errors: Record<string, string>;
  values: Record<string, string>;
}

export const getNextState = (state: StateProps, id: string) => {
  const error = `the field doeesn't match the requirements`;
  const vall = state.values[id];

  const isFieldCorrect = validateFieldById(vall, id);

  const nextSate = {
    ...state,
    errors: {
      ...state.errors,
      [id]: isFieldCorrect ? '' : error,
    },
  };

  return nextSate;
};
