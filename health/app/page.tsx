import HomePage from './home/page';
import Ingredient from './ingredient/page';

export default function Home() {
    return (
        <div className="wrap">
            <HomePage />
            <Ingredient />
        </div>
    );
}