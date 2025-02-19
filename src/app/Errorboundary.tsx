import { PropsType, State } from "@/Types/Type";
import { Component, ErrorInfo } from "react";

class AppErrorBoundary extends Component<PropsType, State> {
    constructor(props: PropsType) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): State {
        return { hasError: true }
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        throw new Error(`Uncaught error:${error} ${info}`);
    }

    public render() {
        const { children } = this.props;
        const { hasError } = this.state;
        if (hasError) {
            return (
            <main>
                <h1>An error occured</h1>
                <button onClick={() => window.location.reload()}>Refresh App</button>
            </main>
            );

        }
        return children;
    }
}


export default AppErrorBoundary;