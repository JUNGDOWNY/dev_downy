import Home from './home/page';
import Ingredient from './ingredient/page';
import Lowest from './lowest/page';
import Target from './target/page';

export default function App() {
    return (
        <div className="wrap">
            <Home />
            <Ingredient />
            <Target />
            <Lowest />
        </div>
    );
}