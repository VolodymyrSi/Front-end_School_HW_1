import Enzyme, { shallow } from "enzyme";
import LoadingSpinner from "../../assets/LoadingSpinner";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const setUp = () => shallow(<LoadingSpinner />);

describe("renders the spinner", () => {
  const component = setUp();
  it("should render feed component", () => {
    const feedItem = component.find("Spinner");
    expect(feedItem).toHaveLength(1);
  });
});
