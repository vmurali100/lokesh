		var jsonData = {
                       "audioResponse": [

                          {
                             "speaker":"spk1",
                             "startTime": "0.0",
                             "endTime": "15.239",
                             "emotion": "neutral",
                             "emotionScore": "0"
                          },

                          {
                             "speaker":"silence",
                             "startTime": "15.240",
                             "endTime": "16.900",
                             "emotion": "NA",
                             "emotionScore": "NA"
                          },

                          {
                             "speaker":"spk2",
                             "startTime": "16.932",
                             "endTime": "27.320",
                             "emotion": "happy",
                             "emotionScore": "2"
                          },

                          {
                             "speaker":"spk1",
                             "startTime": "27.977",
                             "endTime": "37.900",
                             "emotion": "anger",
                             "emotionScore": "-3"
                          },

                          {
                             "speaker":"silence",
                             "startTime": "38.240",
                             "endTime": "43.880",
                             "emotion": "NA",
                             "emotionScore": "NA"
                          },

                          {
                             "speaker":"spk2",
                             "startTime": "45.240",
                             "endTime": "54.900",
                             "emotion": "fearful",
                             "emotionScore": "-1"
                          },

                          {
                             "speaker":"spk1",
                             "startTime": "15.240",
                             "endTime": "16.900",
                             "emotion": "sad",
                             "emotionScore": "-2"
                          }
                       ],

                       "resourceUrl":[
                       {
                           "label": "audioUrl",
                           "url":"audioUrlFromServer.com/some_audio_file.wav"
                       }
                       ]
                    }
        var speaker1=[];
        var speaker2=[];
        var silence=[];
        for(a in jsonData.audioResponse){
            if(jsonData.audioResponse[a].speaker == "spk1"){
              speaker1.push(jsonData.audioResponse[a])
            }else if(jsonData.audioResponse[a].speaker == "spk2"){
              speaker2.push(jsonData.audioResponse[a])
            }else{
              silence.push(jsonData.audioResponse[a])
            }
          }
		var spk1DataArr = Array(60);
		spk1DataArr.fill(0);
		var spk2DataArr = Array(60);
		spk2DataArr.fill(0);
		
		
			for(var d=0; d <= speaker1.length-1; d++){
			var dataArr1StrtVal, dataArr1EndVal;
			dataArr1StrtVal = Math.round(speaker1[d].startTime);
			dataArr1EndVal = Math.round(speaker1[d].endTime);
			spk1DataArr.fill(speaker1[d].emotionScore,dataArr1StrtVal,dataArr1EndVal);
		}
		
			for(var d=0; d <= speaker2.length-1; d++){
				var dataArr2StrtVal, dataArr2EndVal;
				dataArr2StrtVal = Math.round(speaker2[d].startTime);
				dataArr2EndVal = Math.round(speaker2[d].endTime);
				spk2DataArr.fill(speaker2[d].emotionScore,dataArr2StrtVal,dataArr2EndVal);
			}
		
		
        //chart plotting: START 
        var audioChart = new Chart(document.getElementById("line-chart"),{
              type: 'line',
              data: {
                labels: [0.000,1.000,2.000,3.000,4.000,5.000,6.000,7.000,8.000,9.000,10.000,11.000,12.000,
                        13.000,14.000,15.000,16.000,17.000,18.000,19.000,20.000,21.000,22.000,23.000,24.000,
                        25.000,26.000,27.000,28.000,29.000,30.000,31.000,32.000,33.000,34.000,35.000,36.0000,
                        37.000,38.000,39.000,40.000,41.000,42.000,43.000,44.000,45.000,46.000,47.000,48.000,
                        49.000,50.000,51.000,52.000,53.000,54.000,55.000,56.000,57.000,58.000,59.000,60.000],
                datasets: [{ 
                    data: spk1DataArr,
                    label: "Speaker1",
					borderColor: "#4ba0fb",
                    fill: true,
					backgroundColor: 'rgba(75,160,251,0.5)'
                  },
                  { 
                    data: spk2DataArr,
                    label: "Speaker2",
                    borderColor: "#53d86a", 
                    fill: true,
					backgroundColor: 'rgba(83,216,106,0.5)'
                  }
                ],
              },
              options: {
                title: {
                  display: true,
                  text: 'Sentiment Analysis of Audio sample recording'
                },
				  scales: {
					  xAxes: [{
						scaleLabel: {
							display: true,
							labelString: 'Time'
						},
						display: true,
						ticks: {
							callback: function(dataLabel, index) {
								// Hide the label of every 10th dataset. return null to hide the grid line too
								return index % 10 === 0 ? dataLabel : '';
							}
						}
					}],
					yAxes: [{
					  scaleLabel: {
						display: true,
						labelString: 'Emotion'
					  }
					}]
				  }
              }
		});
        //chart plotting: END