import React, { FC } from "react"
import Skeleton from "@material-ui/lab/Skeleton"
import { makeStyles, TableCell, TableRow } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  skeleton: {
    width: 350,
    height: 28,
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    "& span": {
      flexBasis: 150,
    },
  },
}));

const SkeletonBox: FC = () => {
  const classes = useStyles()

  return (
    <TableRow>
      <TableCell>
        <div className={classes.skeleton}>
          <Skeleton />
          <Skeleton />
        </div>
        <div className={classes.skeleton}>
          <Skeleton />
          <Skeleton />
        </div>
        <div className={classes.skeleton}>
          <Skeleton />
          <Skeleton />
        </div>
      </TableCell>
    </TableRow>
  )
}

export default SkeletonBox
