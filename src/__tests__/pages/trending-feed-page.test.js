import Enzyme, { mount, shallow } from "enzyme";
import TrendingFeedPage from "../../pages/TrendingFeedPage.tsx";
import Adapter from "enzyme-adapter-react-16";
import { TikTukContext } from "../../store/context";

Enzyme.configure({ adapter: new Adapter() });

const contextValues = {isLoading: true, setIsLoading: jest.fn()}

const setUp = () =>
  shallow(
    <TikTukContext.Provider value={contextValues}>
      <TrendingFeedPage />
    </TikTukContext.Provider>
  );

describe("`Trending feed component tests", () => {
  describe("renders a div", () => {
    const component = setUp();
    console.log(component.debug());
    it("should render a trending feed page component", () => {
      const feedItem = component.find("TrendingFeedPage");
      expect(feedItem).toHaveLength(1);
    });
  });
});
