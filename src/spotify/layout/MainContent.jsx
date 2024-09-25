import { Header, ShowContent, HomeContent } from "../components/mainContent";
import { useGetDataUrl } from "../hooks";
import { Search } from "../components/library";

export const MainContent = () => {
	const { entity } = useGetDataUrl();

	let content;
	if (!entity) content = <HomeContent term={'top'} ></HomeContent>
	else if (entity !== 'search') content = <ShowContent></ShowContent>
	else if (entity === 'search') content = <Search></Search>

	return (
		<main className="main flex flex-col bg-l-base-secondary dark:bg-base-secondary bg-gradient-to-b from-emerald-100 dark:from-fuchsia-900 rounded-lg h-auto">
			<Header></Header>
			{
				content
			}
		</main>
	);
};