import Enter from "./components/Enter/Enter";
import Game from "./components/Game/Game";

export const routes: [string, React.FC][] = [
    ["/", Enter],
    ["/play", Game]
]