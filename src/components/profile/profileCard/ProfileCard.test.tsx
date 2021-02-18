import { render, screen } from "@testing-library/react/pure";
import "@testing-library/jest-dom/extend-expect";

import ProfileCard from "./ProfileCard";

beforeAll(() => {
  render(<ProfileCard />);
});

describe("<ProfileCard />", () => {
  it("should render follow button", () => {
    expect(screen.getByRole("button", { name: /follow/i })).toBeInTheDocument();
  });

  it("should render next user buttons", () => {
    expect(
      screen.getByRole("button", {
        name: /next user/i,
      })
    ).toBeInTheDocument();
  });
});
