import Enter from "./components/Enter";
import Game from "./components/Game";

export const routes: [string, React.FC][] = [
    ["/", Enter],
    ["/play", Game]
]