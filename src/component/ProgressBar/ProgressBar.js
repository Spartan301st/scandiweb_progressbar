import { PureComponent } from "react";
import "./ProgressBar.scss";

class ProgressBar extends PureComponent {
  renderCircle(steps, checkoutStep) {
    return Object.values(steps)
      .slice(0, -1) // shouldn't render last step as a circle
      .map((stepVal) => (
        <div
          mix={{ block: "ProgressBar", elem: "Circle" }}
          key={stepVal}
          className={`
            ${steps[checkoutStep] > stepVal ? "checked" : ""}
            ${steps[checkoutStep] >= stepVal ? "active" : ""}`}
        >
          {stepVal}
        </div>
      ));
  }
  render() {
    const { checkoutStep } = this.props;
    // No other way to associate steps with their order that is rendered within a circle {SHIPPING_STEP: {…}, BILLING_STEP: {…}, DETAILS_STEP: {…}}
    const steps = {
      SHIPPING_STEP: 1,
      BILLING_STEP: 2,
      DETAILS_STEP: 3,
    };
    const barLength = `${steps[checkoutStep] * (100 / 3)}%`;
    return (
      <div block="ProgressBar" elem="BarContainer">
        <div mix={{ block: "ProgressBar", elem: "BarContent" }}>
          {this.renderCircle(steps, checkoutStep)}
        </div>
        <div
          style={{
            background: `linear-gradient(90deg, var(--primary-base-color) 0%, var(--primary-base-color) ${barLength}, rgb(207, 207, 207) ${barLength}, rgb(207, 207, 207) 100%) `,
          }}
          mix={{ block: "ProgressBar", elem: "ProgressIndicator" }}
        ></div>
      </div>
    );
  }
}
export default ProgressBar;
