import React, {
	FC,
	MutableRefObject,
	useEffect,
	useRef,
	useState,
} from "react";
import "./Planets.scss";
import { useTranslation } from "react-i18next";
import { Column } from "react-table";
import { getPlanet } from "../../../../api/planet/planet";
import { IPlanet } from "../../../../api/planet/types";
import Spinner from "../../../shared/spinner/Spinner";
import PlanetsTable from "./planetsTable/PlanetsTable";
import PlanetsSmallScreen from "./planetsSmallScreen/PlanetsSmallScreen";

interface IProps {
	planetUrls: string[];
}

const Planets: FC<IProps> = ({ planetUrls }) => {
	const [planets, setPlanets] = useState<IPlanet[]>([]);
	const [columns, setColumns] = useState<Column<IPlanet>[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const smallScreenTimeout: MutableRefObject<NodeJS.Timeout | null> = useRef(
		null
	);
	const { t } = useTranslation();
	const spinnerHeight = 50 * planetUrls.length;

	useEffect(() => {
		setIsLoading(true);
		const planetPromises = planetUrls.map((url) => {
			const urlParts = url.split("/");
			const lastPartIndex = urlParts.length - 1;
			const id = urlParts[lastPartIndex] || urlParts[lastPartIndex - 1];
			return getPlanet(id);
		});
		Promise.all(planetPromises as Promise<IPlanet>[]).then((res) => {
			setPlanets(res || []);
			setIsLoading(false);
		});
	}, [planetUrls]);

	useEffect(() => {
		const planet = planets[0];
		if (planet) {
			// @ts-ignore
			const cols: Column<IPlanet>[] = Object.keys(planet).map((column) => ({
				Header: t(column),
				accessor: column,
			}));
			setColumns(cols);
		}
	}, [planets, t]);

	useEffect(() => {
		const checkSmallScreen = () => {
			const isSmall = window.innerWidth <= 900;
			setIsSmallScreen(isSmall);
		};

		checkSmallScreen();

		const checkSmallScreenDebounced = () => {
			if (smallScreenTimeout.current) {
				clearTimeout(smallScreenTimeout.current);
			}
			smallScreenTimeout.current = setTimeout(checkSmallScreen, 500);
		};

		window.addEventListener("resize", checkSmallScreenDebounced);

		return () => {
			window.removeEventListener("resize", checkSmallScreenDebounced);
			if (smallScreenTimeout.current) {
				clearTimeout(smallScreenTimeout.current);
			}
		};
	}, []);

	return (
		<div className="planets">
			{isLoading ? (
				<div
					className="spinner-wrapper"
					style={{ height: `${spinnerHeight}px` }}
				>
					<Spinner />
				</div>
			) : isSmallScreen ? (
				<PlanetsSmallScreen planets={planets} />
			) : (
				<PlanetsTable data={planets} columns={columns} />
			)}
		</div>
	);
};

export default Planets;
