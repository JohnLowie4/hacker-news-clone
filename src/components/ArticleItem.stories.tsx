import type { Meta, StoryObj } from '@storybook/react-vite';

import ArticleItem from './ArticleItem';

const meta = {
  component: ArticleItem,
} satisfies Meta<typeof ArticleItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    index: 1,
    by: "acomjean",
    descendants: 172,
    id: 45142885,
    kids: [
        45143556,
        45143392,
        45143776,
        45143425,
        45144261,
        45144333,
        45143837,
        45143482,
        45143999,
        45144297,
        45144172,
        45143446,
        45143619,
        45142807,
        45143708,
        45144291,
        45144276,
        45144343,
        45143654,
        45143475,
        45144071,
        45143822,
        45143896,
        45144013,
        45144334,
        45143579,
        45143926,
        45144088,
        45144100,
        45144021,
        45143590,
        45143935,
        45142879,
        45143367,
        45144292,
        45143476,
        45143584,
        45143568
    ],
    score: 252,
    text: "Also <a href=\"https:&#x2F;&#x2F;www.washingtonpost.com&#x2F;technology&#x2F;2025&#x2F;09&#x2F;05&#x2F;anthropic-book-authors-copyright-settlement&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.washingtonpost.com&#x2F;technology&#x2F;2025&#x2F;09&#x2F;05&#x2F;anthrop...</a>, <a href=\"https:&#x2F;&#x2F;www.reuters.com&#x2F;sustainability&#x2F;boards-policy-regulation&#x2F;anthropic-agrees-pay-15-billion-settle-author-class-action-2025-09-05&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.reuters.com&#x2F;sustainability&#x2F;boards-policy-regulat...</a>",
    time: 1757101965,
    title: "Anthropic agrees to pay $1.5B to settle lawsuit with book authors",
    type: "story",
    url: "https://www.nytimes.com/2025/09/05/technology/anthropic-settlement-copyright-ai.html?unlocked_article_code=1.jk8.bTTt.Zir9wmtPaTp2&smid=url-share"
}
};