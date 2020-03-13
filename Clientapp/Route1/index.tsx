import { ComponentTest } from './component';

export class Route1 extends React.Component<any> {
    render = () => {
        return (
            <div>
                Hello world from route 1=  {this.props.test}
                <ComponentTest />
            </div>
        );
    }
}

