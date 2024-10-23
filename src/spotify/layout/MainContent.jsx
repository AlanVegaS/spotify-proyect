import { Header, TracksContent, HomeContent } from "../components/mainContent";
import { useGetDataUrl } from "../hooks";
import { Search } from "../components/library";

export const MainContent = () => {
	const { entity } = useGetDataUrl();

	let content;
	if (!entity) content = <HomeContent></HomeContent>
	else if (entity !== 'search') content = <TracksContent></TracksContent>
	else content = <Search></Search>

	return (
		<main className="main flex flex-col bg-l-base-secondary dark:bg-base-secondary bg-gradient-to-b from-emerald-100 dark:from-fuchsia-900 rounded-lg h-auto">
			<Header></Header>
			<div className="text-l-text-primary dark:text-text-primary p-lg overflow-y-scroll">
				{
					content
				}
			</div>
		</main>
	);
};