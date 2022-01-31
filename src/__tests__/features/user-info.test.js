import Enzyme, { shallow } from "enzyme";
import UserInfo from "../../features/UserInfo";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";

Enzyme.configure({ adapter: new Adapter() });

const user = {
  nickname: "Alice Woo",
  avatarLarger:
    "https://i.pinimg.com/474x/56/8f/a2/568fa2f17d494f297e609eb5e9404c8d.jpg",
};

const stats = {
  followerCount: "1",
  followingCount: "2",
  heartCount: "3",
  videoCount: "4",
};

describe("UserInfo tests", () => {
  it("should contain .d-flex wrapper", function () {
    const component = shallow(<UserInfo user={user} stats={stats} />);
    const wrapper = component.find(".d-flex");
    expect(wrapper.length).toBe(1);
    console.log(component.debug());
  });
  it("should contain an image", function () {
    const component = shallow(<UserInfo user={user} stats={stats} />);
    const wrapper = component.find("img");
    expect(wrapper.length).toBe(1);
    console.log(component.debug());
  });
  it("should render userInfo with props", function () {
    const component = shallow(<UserInfo user={user} stats={stats}/>);
    expect(component.debug()).toMatchSnapshot()
  });
  it("should render userInfo without props", function () {
    const component = shallow(<UserInfo/>);
    expect(component.debug()).toMatchSnapshot()
  });
});
