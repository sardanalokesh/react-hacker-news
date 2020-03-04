import React, {ErrorInfo} from "react";

interface Props {

}

interface State {
    error: Error;
    errorInfo: ErrorInfo;
}

export class AppErrorBoundary extends React.Component<Props, State> {


    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
            </details>
            </div>
        );
        }
        // Normally, just render children
        return this.props.children;
    }
}
