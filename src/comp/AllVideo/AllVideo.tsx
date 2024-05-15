"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Video from "../Video/Video";
import styles from "./AllVideo.module.css";
import { dev_url } from "../../url/hosturl";
import { VideoType } from "../allinterface";

const AllVideo = () => {
	const [videoData, setVideoData] = useState<VideoType[]>([]);
	useEffect(() => {
		const getAllVideo = async () => {
			const result = await axios(
				`${dev_url}/video/fetch-allvideo`
				//  {
				// 	headers: {
				// 		Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				// 	},
				// }
			);
			console.log("all video", result);
			setVideoData(result.data.data);
		};
		getAllVideo();
	}, []);

	// console.log("data", data, "isloading", isLoading, "iserror", isError);

	return (
		<div className={`${styles.allvideocontainer} text-center `}>
			<div>
				<h1> All Videos</h1>
				<Video videoData={videoData} />
			</div>
		</div>
	);
};

export default AllVideo;
