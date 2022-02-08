import Enzyme, { shallow } from "enzyme";
import Author from "../../features/Author";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const props = {
  nickname: "Alice Woo",
  avatar:
    "https://i.pinimg.com/474x/56/8f/a2/568fa2f17d494f297e609eb5e9404c8d.jpg",
};

const setUp = (props) => shallow(<Author {...props} />);

describe("Author components tests", () => {
  describe("Has props", () => {
    const component = setUp(props);
    it("should render Author component", () => {
      const author = component.find(".userData");
      expect(author).toHaveLength(1);
    });
    it("should render image", () => {
      const img = component.find("img");
      expect(img).toHaveLength(1);
    });
    it("should render text", () => {
      const text = component.find("h3");
      expect(text).toHaveLength(1);
    });
  });
  describe("Has no props", () => {
    const component = setUp();
    it("should render Author component", () => {
      const author = component.find(".userData");
      expect(author).toHaveLength(1);
    });
    it("should render image", () => {
      const img = component.find("img");
      expect(img).toHaveLength(1);
    });
    it("should render text", () => {
      const text = component.find("h3");
      expect(text).toHaveLength(1);
    });
  });
});
