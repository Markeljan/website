import { RegistryData } from '@/lib/types/agent.types';
import { DetailsSideBar } from '@/components/layout/DetailsSidebar';
import { MarkdownBody } from './MarkdownBody';
import { Card, CardContent } from '../ui/card';
import { RelatedTemplates } from './Related';
import { Calendar } from '../ui/calendar';
import GitCommitHistory from '../ui/commit-history';
export const AgentDetailComponent = ({
  agent,
  relatedAgents,
  pings,
}: {
  agent: RegistryData;
  relatedAgents: RegistryData[];
  pings?: Record<string, number>;
}) => {
  if (!agent) return null;

  return (
    <div className='container m-auto'>
      <div className='w-full md:flex gap-20'>
        <div className='w-full md:w-1/3 h-auto'>
          <DetailsSideBar {...{ agent }} />
        </div>
        <div className='w-full md:w-2/3 py-[22px] md:py-[88px]'>

          <div className='markdownBody'>
            <MarkdownBody
              data={agent?.generatedDescription || agent.description || ''}
            />
          </div>

          {pings && (
            <>
              <div className='grid gap-4 md:grid-cols-3 my-8'>
                <Card className='border-[#2A2A2A]'>
                  <CardContent className='p-6'>
                    <div className='text-sm text-gray-400'>Total Pings</div>
                    <div className='text-2xl font-bold text-white'>
                      {Object.values(pings).reduce(
                        (sum, count) => sum + count,
                        0
                      )}
                    </div>
                  </CardContent>
                </Card>
                <Card className='border-[#2A2A2A]'>
                  <CardContent className='p-6'>
                    <div className='text-sm text-gray-400'>Daily Average</div>
                    <div className='text-2xl font-bold text-white'>
                      {Math.round(
                        Object.values(pings).reduce(
                          (sum, count) => sum + count,
                          0
                        ) / Object.keys(pings).length
                      )}
                    </div>
                  </CardContent>
                </Card>
                <Card className='border-[#2A2A2A]'>
                  <CardContent className='p-6'>
                    <div className='text-sm text-gray-400'>Last 7 Days</div>
                    <div className='text-2xl font-bold text-white'>
                      {Object.entries(pings)
                        .sort(
                          (a, b) =>
                            new Date(b[0]).getTime() - new Date(a[0]).getTime()
                        )
                        .slice(0, 7)
                        .reduce((sum, entry) => sum + entry?.[1], 0)}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className='my-8'>
                <Calendar record={pings} />
              </div>
              <div className='my-8'>
                <GitCommitHistory repoUrl={agent.repoUrl}/>
              </div>
            </>
          )}
        </div>
      </div>
      <RelatedTemplates relatedAgents={relatedAgents} />
    </div>
  );
};
