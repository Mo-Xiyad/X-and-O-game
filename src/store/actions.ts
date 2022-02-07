import {createActionMaker, SingleAction} from "safe-redux-actions"

const makeAction = createActionMaker<typeof Actions>()

const Actions = {
  SET_NICKNAME: (payload: string) => makeAction("SET_NICKNAME", payload),
//   SET_SOCKET: (payload: number) => makeAction("SET_SOCKET", payload),
};

export type Action = SingleAction<typeof Actions>