import Enzyme, { shallow } from "enzyme";
import App from "../App";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const setUp = () => shallow(<App />);

describe("App component tests", () => {
  describe("renders a div", () => {
    const component = setUp();
    it("should render a div component", () => {
      const feedItem = component.find(".App");
      expect(feedItem).toHaveLength(1);
    });
  });
});
