import Header from './header.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}
