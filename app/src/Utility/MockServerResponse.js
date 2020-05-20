function getApi(param) {
    return new Promise((res, rej) => {
        switch (param) {
            case "/items": {
                res(jsonData);
                break;
            }
        }
    });
}

export {
    getApi
}

// All the raw data goes here
var jsonData = [
    {
        "created_at": "2018-03-14T03:50:30.000Z",
        "title": "Stephen Hawking has died",
        "url": "http://www.bbc.com/news/uk-43396008",
        "author": "Cogito",
        "points": 6015,
        "story_text": null,
        "comment_text": null,
        "num_comments": 436,
        "story_id": null,
        "story_title": null,
        "story_url": null,
        "parent_id": null,
        "created_at_i": 1520999430,
        "relevancy_score": 8012,
        "_tags": ["story", "author_Cogito", "story_16582136"],
        "objectID": "16582136",
        "_highlightResult": {
            "title":
            {
                "value": "Stephen Hawking has died",
                "matchLevel": "none", "matchedWords": []
            },
            "url": {
                "value": "http://www.bbc.com/news/uk-43396008",
                "matchLevel": "none",
                "matchedWords": []
            },
            "author": {
                "value": "Cogito",
                "matchLevel": "none",
                "matchedWords": []
            }
        }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 180, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 }
    },
    { "created_at": "2016-02-17T08:38:37.000Z", "title": "A Message to Our Customers", "url": "http://www.apple.com/customer-letter/", "author": "epaga", "points": 5771, "story_text": null, "comment_text": null, "num_comments": 967, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1455698317, "relevancy_score": 6561, "_tags": ["story", "author_epaga", "story_11116274"], "objectID": "11116274", "_highlightResult": { "title": { "value": "A Message to Our Customers", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "http://www.apple.com/customer-letter/", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "epaga", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 179, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2011-10-05T23:42:23.000Z", "title": "Steve Jobs has passed away.", "url": "http://www.apple.com/stevejobs/", "author": "patricktomas", "points": 4271, "story_text": "", "comment_text": null, "num_comments": 376, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1317858143, "relevancy_score": 3496, "_tags": ["story", "author_patricktomas", "story_3078128"], "objectID": "3078128", "_highlightResult": { "title": { "value": "Steve Jobs has passed away.", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "http://www.apple.com/stevejobs/", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "patricktomas", "matchLevel": "none", "matchedWords": [] }, "story_text": { "value": "", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 178, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2017-02-19T21:16:33.000Z", "title": "Reflecting on one very, very strange year at Uber", "url": "https://www.susanjfowler.com/blog/2017/2/19/reflecting-on-one-very-strange-year-at-uber", "author": "grey-area", "points": 4107, "story_text": null, "comment_text": null, "num_comments": 1014, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1487538993, "relevancy_score": 7260, "_tags": ["story", "author_grey-area", "story_13682022"], "objectID": "13682022", "_highlightResult": { "title": { "value": "Reflecting on one very, very strange year at Uber", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "https://www.susanjfowler.com/blog/2017/2/19/reflecting-on-one-very-strange-year-at-uber", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "grey-area", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 177, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2020-05-04T08:43:35.000Z", "title": "Bye, Amazon", "url": "https://www.tbray.org/ongoing/When/202x/2020/04/29/Leaving-Amazon", "author": "grey-area", "points": 3816, "story_text": null, "comment_text": null, "num_comments": 1096, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1588581815, "_tags": ["story", "author_grey-area", "story_23065782"], "objectID": "23065782", "_highlightResult": { "title": { "value": "Bye, Amazon", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "https://www.tbray.org/ongoing/When/202x/2020/04/29/Leaving-Amazon", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "grey-area", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 176, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2020-01-21T15:38:22.000Z", "title": "Every Google result now looks like an ad", "url": "https://twitter.com/craigmod/status/1219644556003565568", "author": "cmod", "points": 3592, "story_text": null, "comment_text": null, "num_comments": 969, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1579621102, "_tags": ["story", "author_cmod", "story_22107823"], "objectID": "22107823", "_highlightResult": { "title": { "value": "Every Google result now looks like an ad", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "https://twitter.com/craigmod/status/1219644556003565568", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "cmod", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 175, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2017-12-14T18:13:35.000Z", "title": "F.C.C. Repeals Net Neutrality Rules", "url": "https://www.nytimes.com/2017/12/14/technology/net-neutrality-repeal-vote.html", "author": "panny", "points": 3384, "story_text": null, "comment_text": null, "num_comments": 1397, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1513275215, "relevancy_score": 7838, "_tags": ["story", "author_panny", "story_15924794"], "objectID": "15924794", "_highlightResult": { "title": { "value": "F.C.C. Repeals Net Neutrality Rules", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "https://www.nytimes.com/2017/12/14/technology/net-neutrality-repeal-vote.html", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "panny", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 174, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2012-03-23T00:40:39.000Z", "title": "Show HN: This up votes itself", "url": "http://news.ycombinator.com/vote?for=3742902&dir=up&whence=%6e%65%77%65%73%74", "author": "olalonde", "points": 3381, "story_text": "", "comment_text": null, "num_comments": 83, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1332463239, "relevancy_score": 3819, "_tags": ["story", "author_olalonde", "story_3742902", "show_hn"], "objectID": "3742902", "_highlightResult": { "title": { "value": "Show HN: This up votes itself", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "http://news.ycombinator.com/vote?for=3742902&dir=up&whence=%6e%65%77%65%73%74", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "olalonde", "matchLevel": "none", "matchedWords": [] }, "story_text": { "value": "", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 173, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2019-05-30T16:09:19.000Z", "title": "Switch from Chrome to Firefox", "url": "https://www.mozilla.org/en-US/firefox/switch/", "author": "WisNorCan", "points": 3287, "story_text": null, "comment_text": null, "num_comments": 981, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1559232559, "relevancy_score": 8859, "_tags": ["story", "author_WisNorCan", "story_20052623"], "objectID": "20052623", "_highlightResult": { "title": { "value": "Switch from Chrome to Firefox", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "https://www.mozilla.org/en-US/firefox/switch/", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "WisNorCan", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 172, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2020-04-19T21:33:46.000Z", "title": "Ask HN: I'm a software engineer going blind, how should I prepare?", "url": null, "author": "zachrip", "points": 3270, "story_text": "I&#x27;m a 24 y&#x2F;o full stack engineer (I know some of you are rolling your eyes right now, just highlighting that I have experience on frontend apps as well as backend architecture). I&#x27;ve been working professionally for ~7 years building mostly javascript projects but also some PHP. Two years ago I was diagnosed with a condition called &quot;Usher&#x27;s Syndrome&quot; - characterized by hearing loss, balance issues, and progressive vision loss.<p>I know there are blind software engineers out there. My main questions are:<p>- Are there blind frontend engineers?<p>- What kinds of software engineering lend themselves to someone with limited vision? Backend only?<p>- Besides a screen reader, what are some of the best tools for building software with limited vision?<p>- Does your company employ blind engineers? How well does it work? What kind of engineer are they?<p>I&#x27;m really trying to get ahead of this thing and prepare myself as my vision is degrading rather quickly. I&#x27;m not sure what I can do if I can&#x27;t do SE as I don&#x27;t have any formal education in anything. I&#x27;ve worked really hard to get to where I am and don&#x27;t want it to go to waste.<p>Thank you for any input, and stay safe out there!<p>Edit:<p>Thank you all for your links, suggestions, and moral support, I really appreciate it. Since my diagnosis I&#x27;ve slowly developed a crippling anxiety centered around a feeling that I need to figure out the rest of my life before it&#x27;s too late. I know I shouldn&#x27;t think this way but it is hard not to. I&#x27;m very independent and I feel a pressure to &quot;show up.&quot; I will look into these opportunities mentioned and try to get in touch with some more members of the blind engineering community.", "comment_text": null, "num_comments": 472, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1587332026, "_tags": ["story", "author_zachrip", "story_22918980", "ask_hn"], "objectID": "22918980", "_highlightResult": { "title": { "value": "Ask HN: I'm a software engineer going blind, how should I prepare?", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "zachrip", "matchLevel": "none", "matchedWords": [] }, "story_text": { "value": "I'm a 24 y/o full stack engineer (I know some of you are rolling your eyes right now, just highlighting that I have experience on frontend apps as well as backend architecture). I've been working professionally for ~7 years building mostly javascript projects but also some PHP. Two years ago I was diagnosed with a condition called &quot;Usher's Syndrome&quot; - characterized by hearing loss, balance issues, and progressive vision loss.<p>I know there are blind software engineers out there. My main questions are:<p>- Are there blind frontend engineers?<p>- What kinds of software engineering lend themselves to someone with limited vision? Backend only?<p>- Besides a screen reader, what are some of the best tools for building software with limited vision?<p>- Does your company employ blind engineers? How well does it work? What kind of engineer are they?<p>I'm really trying to get ahead of this thing and prepare myself as my vision is degrading rather quickly. I'm not sure what I can do if I can't do SE as I don't have any formal education in anything. I've worked really hard to get to where I am and don't want it to go to waste.<p>Thank you for any input, and stay safe out there!<p>Edit:<p>Thank you all for your links, suggestions, and moral support, I really appreciate it. Since my diagnosis I've slowly developed a crippling anxiety centered around a feeling that I need to figure out the rest of my life before it's too late. I know I shouldn't think this way but it is hard not to. I'm very independent and I feel a pressure to &quot;show up.&quot; I will look into these opportunities mentioned and try to get in touch with some more members of the blind engineering community.", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 171, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2017-02-23T23:05:08.000Z", "title": "Cloudflare Reverse Proxies Are Dumping Uninitialized Memory", "url": "https://bugs.chromium.org/p/project-zero/issues/detail?id=1139", "author": "tptacek", "points": 3238, "story_text": null, "comment_text": null, "num_comments": 992, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1487891108, "relevancy_score": 7273, "_tags": ["story", "author_tptacek", "story_13718752"], "objectID": "13718752", "_highlightResult": { "title": { "value": "Cloudflare Reverse Proxies Are Dumping Uninitialized Memory", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "https://bugs.chromium.org/p/project-zero/issues/detail?id=1139", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "tptacek", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 170, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2016-06-24T03:48:57.000Z", "title": "UK votes to leave EU", "url": "http://www.bbc.co.uk/news/uk-politics-36615028", "author": "dmmalam", "points": 3125, "story_text": null, "comment_text": null, "num_comments": 2531, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1466740137, "relevancy_score": 6802, "_tags": ["story", "author_dmmalam", "story_11966167"], "objectID": "11966167", "_highlightResult": { "title": { "value": "UK votes to leave EU", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "http://www.bbc.co.uk/news/uk-politics-36615028", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "dmmalam", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 169, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2014-10-30T11:12:23.000Z", "title": "Tim Cook Speaks Up", "url": "http://www.businessweek.com/articles/2014-10-30/tim-cook-im-proud-to-be-gay", "author": "replicatorblog", "points": 3086, "story_text": "", "comment_text": null, "num_comments": 974, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1414667543, "relevancy_score": 5646, "_tags": ["story", "author_replicatorblog", "story_8532261"], "objectID": "8532261", "_highlightResult": { "title": { "value": "Tim Cook Speaks Up", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "http://www.businessweek.com/articles/2014-10-30/tim-cook-im-proud-to-be-gay", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "replicatorblog", "matchLevel": "none", "matchedWords": [] }, "story_text": { "value": "", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 168, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2017-02-23T13:01:08.000Z", "title": "Announcing the first SHA-1 collision", "url": "https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html", "author": "pfg", "points": 3030, "story_text": null, "comment_text": null, "num_comments": 485, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1487854868, "relevancy_score": 7272, "_tags": ["story", "author_pfg", "story_13713480"], "objectID": "13713480", "_highlightResult": { "title": { "value": "Announcing the first SHA-1 collision", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "pfg", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 167, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2019-04-23T13:00:24.000Z", "title": "I Sell Onions on the Internet", "url": "https://www.deepsouthventures.com/i-sell-onions-on-the-internet/", "author": "eightturn", "points": 3015, "story_text": null, "comment_text": null, "num_comments": 435, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1556024424, "relevancy_score": 8791, "_tags": ["story", "author_eightturn", "story_19728132"], "objectID": "19728132", "_highlightResult": { "title": { "value": "I Sell Onions on the Internet", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "https://www.deepsouthventures.com/i-sell-onions-on-the-internet/", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "eightturn", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 166, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2017-11-28T19:41:10.000Z", "title": "macOS High Sierra: Anyone can login as “root” with empty password", "url": "https://twitter.com/lemiorhan/status/935578694541770752", "author": "vladikoff", "points": 3001, "story_text": null, "comment_text": null, "num_comments": 813, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1511898070, "relevancy_score": 7810, "_tags": ["story", "author_vladikoff", "story_15800676"], "objectID": "15800676", "_highlightResult": { "title": { "value": "macOS High Sierra: Anyone can login as “root” with empty password", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "https://twitter.com/lemiorhan/status/935578694541770752", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "vladikoff", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 165, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2018-02-06T20:57:15.000Z", "title": "SpaceX’s Falcon Heavy successfully launches", "url": "https://techcrunch.com/2018/02/06/spacexs-historic-falcon-heavy-successfully-launches/?ncid=rss&utm_source=dlvr.it&utm_medium=twitter", "author": "mpweiher", "points": 2968, "story_text": null, "comment_text": null, "num_comments": 872, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1517950635, "relevancy_score": 7944, "_tags": ["story", "author_mpweiher", "story_16319505"], "objectID": "16319505", "_highlightResult": { "title": { "value": "SpaceX’s Falcon Heavy successfully launches", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "https://techcrunch.com/2018/02/06/spacexs-historic-falcon-heavy-successfully-launches/?ncid=rss&utm_source=dlvr.it&utm_medium=twitter", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "mpweiher", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 164, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2020-05-12T16:09:46.000Z", "title": "Twitter Will Allow Employees to Work at Home Forever", "url": "https://www.buzzfeednews.com/article/alexkantrowitz/twitter-will-allow-employees-to-work-at-home-forever", "author": "minimaxir", "points": 2949, "story_text": null, "comment_text": null, "num_comments": 1336, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1589299786, "_tags": ["story", "author_minimaxir", "story_23155647"], "objectID": "23155647", "_highlightResult": { "title": { "value": "Twitter Will Allow Employees to Work at Home Forever", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "https://www.buzzfeednews.com/article/alexkantrowitz/twitter-will-allow-employees-to-work-at-home-forever", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "minimaxir", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 163, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2018-10-15T22:00:14.000Z", "title": "Paul Allen has died", "url": "https://www.cnbc.com/2018/10/15/microsoft-co-founder-paul-allen-dies-of-cancer-at-age-65.html", "author": "coloneltcb", "points": 2901, "story_text": null, "comment_text": null, "num_comments": 277, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1539640814, "relevancy_score": 8428, "_tags": ["story", "author_coloneltcb", "story_18224227"], "objectID": "18224227", "_highlightResult": { "title": { "value": "Paul Allen has died", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "https://www.cnbc.com/2018/10/15/microsoft-co-founder-paul-allen-dies-of-cancer-at-age-65.html", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "coloneltcb", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 162, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2018-06-03T20:14:26.000Z", "title": "Microsoft Is Said to Have Agreed to Acquire GitHub", "url": "http://www.bloomberg.com/news/articles/2018-06-03/microsoft-is-said-to-have-agreed-to-acquire-coding-site-github?", "author": "miguelrochefort", "points": 2873, "story_text": null, "comment_text": null, "num_comments": 1437, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1528056866, "relevancy_score": 8159, "_tags": ["story", "author_miguelrochefort", "story_17221527"], "objectID": "17221527", "_highlightResult": { "title": { "value": "Microsoft Is Said to Have Agreed to Acquire GitHub", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "http://www.bloomberg.com/news/articles/2018-06-03/microsoft-is-said-to-have-agreed-to-acquire-coding-site-github?", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "miguelrochefort", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 161, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2019-01-07T17:03:59.000Z", "title": "Announcing unlimited free private repos", "url": "https://blog.github.com/2019-01-07-new-year-new-github/", "author": "razer6", "points": 2867, "story_text": null, "comment_text": null, "num_comments": 685, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1546880639, "relevancy_score": 8589, "_tags": ["story", "author_razer6", "story_18847043"], "objectID": "18847043", "_highlightResult": { "title": { "value": "Announcing unlimited free private repos", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "https://blog.github.com/2019-01-07-new-year-new-github/", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "razer6", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 160, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2019-11-20T23:13:09.000Z", "title": "Slack’s new WYSIWYG input box is terrible", "url": "https://quuxplusone.github.io/blog/2019/11/20/slack-rich-text-box/", "author": "ingve", "points": 2776, "story_text": null, "comment_text": null, "num_comments": 1076, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1574291589, "_tags": ["story", "author_ingve", "story_21589647"], "objectID": "21589647", "_highlightResult": { "title": { "value": "Slack’s new WYSIWYG input box is terrible", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "https://quuxplusone.github.io/blog/2019/11/20/slack-rich-text-box/", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "ingve", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 159, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2020-02-12T17:38:20.000Z", "title": "Gears", "url": "https://ciechanow.ski/gears/", "author": "robert-boehnke", "points": 2760, "story_text": null, "comment_text": null, "num_comments": 222, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1581529100, "_tags": ["story", "author_robert-boehnke", "story_22310813"], "objectID": "22310813", "_highlightResult": { "title": { "value": "Gears", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "https://ciechanow.ski/gears/", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "robert-boehnke", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 158, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2017-09-18T19:45:08.000Z", "title": "W3C abandons consensus, standardizes DRM, EFF resigns", "url": "https://boingboing.net/2017/09/18/antifeatures-for-all.html", "author": "guelo", "points": 2735, "story_text": null, "comment_text": null, "num_comments": 978, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1505763908, "relevancy_score": 7675, "_tags": ["story", "author_guelo", "story_15278883"], "objectID": "15278883", "_highlightResult": { "title": { "value": "W3C abandons consensus, standardizes DRM, EFF resigns", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "https://boingboing.net/2017/09/18/antifeatures-for-all.html", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "guelo", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 157, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2014-03-10T15:44:42.000Z", "title": "2048", "url": "http://gabrielecirulli.github.io/2048/", "author": "frederfred", "points": 2732, "story_text": "", "comment_text": null, "num_comments": 410, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1394466282, "relevancy_score": 5202, "_tags": ["story", "author_frederfred", "story_7373566"], "objectID": "7373566", "_highlightResult": { "title": { "value": "2048", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "http://gabrielecirulli.github.io/2048/", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "frederfred", "matchLevel": "none", "matchedWords": [] }, "story_text": { "value": "", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 156, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2017-03-07T13:10:56.000Z", "title": "CIA malware and hacking tools", "url": "https://wikileaks.org/ciav7p1/", "author": "randomname2", "points": 2699, "story_text": null, "comment_text": null, "num_comments": 1087, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1488892256, "relevancy_score": 7299, "_tags": ["story", "author_randomname2", "story_13810015"], "objectID": "13810015", "_highlightResult": { "title": { "value": "CIA malware and hacking tools", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "https://wikileaks.org/ciav7p1/", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "randomname2", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 155, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2019-03-14T20:25:03.000Z", "title": "Show HN: A retro video game console I've been working on in my free time", "url": "https://internalregister.github.io/2019/03/14/Homebrew-Console.html", "author": "pkiller", "points": 2690, "story_text": null, "comment_text": null, "num_comments": 210, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1552595103, "relevancy_score": 8710, "_tags": ["story", "author_pkiller", "story_19393279", "show_hn"], "objectID": "19393279", "_highlightResult": { "title": { "value": "Show HN: A retro video game console I've been working on in my free time", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "https://internalregister.github.io/2019/03/14/Homebrew-Console.html", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "pkiller", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 154, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2013-08-22T17:10:57.000Z", "title": "Don't Fly During Ramadan", "url": "http://varnull.adityamukerjee.net/post/59021412512/dont-fly-during-ramadan", "author": "chimeracoder", "points": 2617, "story_text": "", "comment_text": null, "num_comments": 961, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1377191457, "relevancy_score": 4813, "_tags": ["story", "author_chimeracoder", "story_6258422"], "objectID": "6258422", "_highlightResult": { "title": { "value": "Don't Fly During Ramadan", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "http://varnull.adityamukerjee.net/post/59021412512/dont-fly-during-ramadan", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "chimeracoder", "matchLevel": "none", "matchedWords": [] }, "story_text": { "value": "", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 153, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2018-10-28T17:57:59.000Z", "title": "IBM acquires Red Hat", "url": "https://www.redhat.com/en/blog/red-hat-ibm-creating-leading-hybrid-cloud-provider", "author": "nopriorarrests", "points": 2611, "story_text": null, "comment_text": null, "num_comments": 491, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1540749479, "relevancy_score": 8441, "_tags": ["story", "author_nopriorarrests", "story_18321884"], "objectID": "18321884", "_highlightResult": { "title": { "value": "IBM acquires Red Hat", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "https://www.redhat.com/en/blog/red-hat-ibm-creating-leading-hybrid-cloud-provider", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "nopriorarrests", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 152, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }, { "created_at": "2019-12-24T10:15:42.000Z", "title": "My Business Card Runs Linux", "url": "https://www.thirtythreeforty.net/posts/2019/12/my-business-card-runs-linux/", "author": "rcarmo", "points": 2595, "story_text": null, "comment_text": null, "num_comments": 397, "story_id": null, "story_title": null, "story_url": null, "parent_id": null, "created_at_i": 1577182542, "_tags": ["story", "author_rcarmo", "story_21871026"], "objectID": "21871026", "_highlightResult": { "title": { "value": "My Business Card Runs Linux", "matchLevel": "none", "matchedWords": [] }, "url": { "value": "https://www.thirtythreeforty.net/posts/2019/12/my-business-card-runs-linux/", "matchLevel": "none", "matchedWords": [] }, "author": { "value": "rcarmo", "matchLevel": "none", "matchedWords": [] } }, "_rankingInfo": { "nbTypos": 0, "firstMatchedWord": 0, "proximityDistance": 0, "userScore": 151, "geoDistance": 0, "geoPrecision": 1, "nbExactWords": 0, "words": 0, "filters": 1 } }]

