import { screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Error404 from "./Error404";
import customRender from "../utils/customRender";

describe("Test Error404 Component", () => {
    test("is rendered correctly", () => {
        customRender(<Error404 />);
        const errorImage = screen.getByAltText("Erreur 404");
        const errorMessage = screen.getByText("Oups! Page non trouvée");
        const linkElement = screen.getByText("Retourner sur la page d’accueil");

        expect(errorImage).toBeInTheDocument();
        expect(errorMessage).toBeInTheDocument();
        expect(linkElement).toBeInTheDocument();

        // リンクが正しい URL を指していることを検証
        expect(linkElement.closest("a")).toHaveAttribute("href", "/");
    });
});
