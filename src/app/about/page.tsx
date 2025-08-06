import Card from '../../components/Card';

export default function AboutPage() {
  return (
    <Card title="About Sports Bucket List">
      <p className="text-lg mb-4 text-gray-700">
        Sports Bucket List is a community-powered platform built for fans who live for the thrill of live games.
        Whether you&rsquo;re chasing the dream of visiting all 30 MLB stadiums, checking off iconic events like the Super Bowl,
        or earning trophies for your team&rsquo;s championship wins – this is your digital companion.
      </p>
      <p className="text-lg mb-4 text-gray-700">
        Our mission is simple: celebrate fandom through real experiences. You&rsquo;ll be able to scan in at stadiums, track
        your progress, earn badges, and connect with others chasing the same bucket list goals.
      </p>
      <p className="text-lg text-gray-700">
        We&rsquo;re building this platform with fans first – no paywalls, no tiers. Just your memories, your milestones, and
        your journey through the world of sports.
      </p>
    </Card>
  );
}