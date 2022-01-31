import Enzyme, { shallow } from "enzyme";
import UserFeedPage from "../../pages/UserFeedPage";
import Adapter from "enzyme-adapter-react-16";
import { TikTukContext } from "../../store/context";

Enzyme.configure({ adapter: new Adapter() });

const contextValues = {isLoading: true, setIsLoading: jest.fn()}

const setUp = () =>
  shallow(
    <TikTukContext.Provider value={contextValues}>
      <UserFeedPage />
    </TikTukContext.Provider>
  );

describe("`Trending feed component tests", () => {
  describe("renders a div", () => {
    const component = setUp();
    console.log(component.debug());
    it("should render a user feed page component", () => {
      const feedItem = component.find("UserFeedPage");
      expect(feedItem).toHaveLength(1);
    });
  });
});
