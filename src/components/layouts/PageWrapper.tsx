import { ReactNode, useEffect } from "react";
import { useSidebar } from "../../contexts/SidebarContext";

type Props = {
  state?: string;
  children: ReactNode;
};

const PageWrapper = (props: Props) => {
  const { appState, setAppState } = useSidebar();

  useEffect(() => {
    if (props.state) {
      setAppState(props.state);
    }
  }, [props.state, appState]);

  return <>{props.children}</>;
};

export default PageWrapper;
