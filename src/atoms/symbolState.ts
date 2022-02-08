import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { Symbol } from "../components/Game/Board";

const { persistAtom } = recoilPersist();

export const symbolState = atom<Symbol>({
  key: "symbolState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
