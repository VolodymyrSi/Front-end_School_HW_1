import Enzyme, { shallow } from "enzyme";
import Stats from "../../features/Stats";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const props = {
  comments: 1,
  views: 2,
  likes: 3,
};

const setUp = (props) => shallow(<Stats {...props} />);

describe("Author components tests", () => {
  describe("Has props", () => {
    const component = setUp(props);
    it("should render Author component", () => {
      const stats = component.find(".videoStats");
      expect(stats).toHaveLength(1);
    });
    it("should render 3 pieces of text", () => {
      const h4 = component.find("h4");
      expect(h4).toHaveLength(3);
    });
  });
  describe("Has no props", () => {
    const component = setUp();
    it("should render Author component", () => {
      const stats = component.find(".videoStats");
      expect(stats).toHaveLength(1);
    });
    it("should render 3 pieces of text", () => {
      const h4 = component.find("h4");
      expect(h4).toHaveLength(3);
    });
  });
});
