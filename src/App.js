import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LanguageIcon from '@material-ui/icons/Language';
import Button from '@material-ui/core/Button';
import './App.css';

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'row',
  },
  bar: {
    backgroundColor: 'orange',
    width: 120,
    height: '100vh',
  },
  note: {
    backgroundColor: 'aqua',
    width: 120,
    height: '100vh',
  },
  center: {
    height: '100vh',
    flex: 1,
  },
  card: {
    padding: 20,
    backgroundColor: 'gray',
  },
  content: {
    backgroundColor: 'Orchid',
    height: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'AliceBlue',
    height: 30,
    display: 'flex',
    flexDirection: 'row',
  },
  rightHeader: {
    flexGrow: 0,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemContainer: {
    display: 'flex',
  },
  leftHeader: {
    flexGrow: 1,
    flexShrink: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  // problemText: {
  //   maxWidth: 120,
  //   backgroundColor: 'yellow',
  //   flex: 1,
  //   textOverflow: 'ellipsis',
  //   whiteSpace: 'nowrap',
  //   backgroundColor: 'DodgerBlue',
  //   alignItems: 'flex-start',
  // },
  problemText: {
    backgroundColor: 'yellow',
    flex: 1,
    minWidth: 0,
    maxWidth: '100%',
    width: '100%',
  },
  problemA: {
    backgroundColor: 'DodgerBlue',
    // width: 30,
    // display: 'inline-block',
    // whiteSpace: 'pre',
    // overflow: 'hidden',
    // textOverflow: 'ellipsis',
  },
  subTitle: {
    display: 'inline-block',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'pre',
  },
};

function App() {
  return (
    <div style={styles.app}>
      <div style={styles.bar} />
      <div style={styles.center}>
        <div style={styles.card}>
          <div style={styles.header}>
            <div style={styles.leftHeader}>
              <LanguageIcon />
              <div style={styles.problemText}>
                {/* Or min-width some actual value. Without this, the flex child containing the other text elements won’t narrow past the “implied width” of those text elements. */}
                <div style={styles.problemA} className="problem-text">
                  Or min-width some actual value. Without this, the flex child containing the other text elements won’t narrow past the “implied width” of those text elements.
                </div>
                {/* <div style={styles.problemA}>
                  <div style={styles.subTitle}>
                    Or min-width some actual value. Without this, the flex child containing the other text elements won’t narrow past the “implied width” of those text elements.
                  </div>
                </div> */}
              </div>
            </div>
            <div style={styles.rightHeader}>
              <div style={styles.itemContainer}>
                <PhoneIcon />
                <div style={styles.itemText}>1112223331</div>
              </div>
              <div style={styles.itemContainer}>
                <MailIcon />
                <div style={styles.itemText}>mail@mail.com</div>
              </div>
              <div style={styles.itemContainer}>
                <LanguageIcon />
                <div style={styles.itemText}>question </div>
              </div>
              <Button>Edit</Button>
            </div>
          </div>
          <div style={styles.content}>
            Content here
          </div>
        </div>
      </div>
      <div style={styles.note} />
    </div>
  );
}

export default App;
