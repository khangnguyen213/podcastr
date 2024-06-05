function PodcastDetails({
  params,
}: {
  params: {
    podcastId: string;
  };
}) {
  return <div className="text-white-1">PodcastDetails {params.podcastId}</div>;
}

export default PodcastDetails;
