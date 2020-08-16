export const PASS = "PASS";

export function pass() {
  return {
    type: PASS
  };
}

export const ANSWERED_QUESTION = "ANSWERED_QUESTION";

export function answeredQuestion({ question, answer }) {
  return {
    type: ANSWERED_QUESTION,
    payload: { question, answer }
  };
}

export const PERFORMED_OP = "PERFORMED_OP";

export function performedOperation({ specialActivity }) {
  return {
    type: PERFORMED_OP,
    payload: { specialActivity }
  };
}

export const CHANGE_OP = "CHANGE_OP";

export function changeOperation({ operation }) {
  return {
    type: CHANGE_OP,
    payload: { operation }
  };
}

export const PERFORMED_SPECIAL_ACTIVITY = "PERFORMED_SPECIAL_ACTIVITY";

export const CHANGE_SPECIAL_ACTIVITY = "CHANGE_SPECIAL_ACTIVITY";

export function changeSpecialActivity({ specialActivity }) {
  return {
    type: CHANGE_SPECIAL_ACTIVITY,
    payload: { specialActivity }
  };
}


export const RESET = "RESET";

export function reset() {
  return {
    type: RESET
  };
}
