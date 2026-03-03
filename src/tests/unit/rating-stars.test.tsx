import { render, screen } from "@testing-library/react";
import { RatingStars } from "@/components/RatingStars";

describe("RatingStars", () => {
  it("renders accessible rating label for fractional scores", () => {
    render(<RatingStars rating={4.5} />);

    expect(screen.getByLabelText("Rating 4.5 out of 5")).toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
  });

  it("renders lower boundary value", () => {
    render(<RatingStars rating={0} />);

    expect(screen.getByLabelText("Rating 0 out of 5")).toBeInTheDocument();
  });
});
