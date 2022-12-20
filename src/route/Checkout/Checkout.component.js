import ProgressBar from "Component/ProgressBar/ProgressBar";
import Checkout from "SourceRoute/Checkout/Checkout.component";

/** @namespace Scandiweb_assignment/Route/Checkout/Component */
export default class CheckoutComponent extends Checkout {
  constructor(props) {
    super(props);
  }
  componentDidUpdate(prevProps) {
    const { checkoutStep } = this.props;
    const { checkoutStep: prevCheckoutStep } = prevProps;

    if (checkoutStep !== prevCheckoutStep) {
      this.updateHeader();
      this.updateStep();
    }
  }

  renderProgressBar() {
    console.log("props", this.stepMap);
    const { checkoutStep } = this.props;
    return <ProgressBar checkoutStep={checkoutStep} />;
  }
  render() {
    return (
      <>
        {this.renderProgressBar()}
        {super.render()}
      </>
    );
  }
}
