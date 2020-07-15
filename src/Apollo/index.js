// subscribeToNewLinks = () => {
//   subscribeToMore({
//     document: NEW_LINKS_SUBSCRIPTION,
//     updateQuery: (prev, {subscriptionData}) => {
//       if (!subscriptionData.data) return prev;
//       const newLink = subscriptionData.data.newLink;
//       const exists = prev.feed.links.find(({id}) => id === newLink.id);
//       if (exists) return prev;

//       return Object.assign({}, prev, {
//         feed: {
//           links: [newLink, ...prev.feed.links],
//           count: prev.feed.links.length + 1,
//           __typename: prev.feed.__typename,
//         },
//       });
//     },
//   });
// };
