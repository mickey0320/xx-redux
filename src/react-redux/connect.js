import { useContext, useEffect, useState } from "react";
import ReactReduxContext from "./reactReduxContext";
import { bindActionCreators } from "../redux";

function connect(mapStateToProps, mapDispatchToProps) {
  return (WrappedComponent) => {
    return (props) => {
      const { store } = useContext(ReactReduxContext);
      const [mapStateProps, setMapStateProps] = useState();
      const [mapDispatchProps, setMapDispatchProps] = useState();

      useEffect(() => {
        if (typeof mapStateToProps === "function") {
          setMapStateProps(mapStateToProps(store.getState()));
        }

        if (!mapDispatchToProps) {
          setMapDispatchProps({ dispatch: store.dispatch });
        } else if (typeof mapDispatchToProps === "function") {
          setMapDispatchProps(mapDispatchToProps(store.dispatch));
        } else if (typeof mapDispatchToProps === "object") {
          setMapDispatchProps(
            bindActionCreators(store.dispatch, mapDispatchToProps)
          );
        }
      }, [store.getState()]);

      return (
        <WrappedComponent {...mapStateProps} {...mapDispatchProps} {...props} />
      );
    };
  };
}

export default connect;
