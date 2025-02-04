// Player data dynamically generated from the CSV file
const playerData = [
    { "player_name": "John Jaso", "video_url": "https://sporty-clips.mlb.com/YjlLTlpfWGw0TUFRPT1fQTFOVFVWQU1Vd0lBQVFjRFVnQUFDVkpVQUZsWEFnY0FVVlpRQVFGUVVsRUFCZ29D.mp4" },
    { "player_name": "Evan Longoria", "video_url": "https://sporty-clips.mlb.com/OHcxUXlfWGw0TUFRPT1fQmdCUVZBRURVQUlBRFFZR1h3QUFVZ05WQUFCUlVWZ0FWMUlCVXdRTkJsQlZBd29D.mp4" },
    { "player_name": "Marwin Gonzalez", "video_url": "https://sporty-clips.mlb.com/Mk9vbFBfWGw0TUFRPT1fQlZOWUFRZFNYd1lBWUZGVUF3QUFVWUZZQUJFQlRXZmpQUF.mp4" },
    { "player_name": "Eddie Rosario", "video_url": "https://sporty-clips.mlb.com/ajlhWFpfWGw0TUFRPT1fVkZVQVZRZFdYZ0VBWEFVRFJXR1FZR1h3QUdCQUYJQUVJUQ.mp4" },
    { "player_name": "Marcus Semien", "video_url": "https://sporty-clips.mlb.com/bGUyNEdfWGw0TUFRPT1fRDFkWIV3RU5WZ3V5WVBNQUFVQlNQUxSQlVXRFVUWF.mp4" },
    { "player_name": "Ryan Zimmerman", "video_url": "https://sporty-clips.mlb.com/MzR3Wk5fWGw0TUFRPT1fQmdOUlhBVldVMUFBQ2dSVVV3QUFVMVZXQUZoVVZGSUFBQVFEVVFSWEJRWUJVMU1E.mp4" },
    { "player_name": "Ehire Adrianza", "video_url": "https://sporty-clips.mlb.com/d1c2Uk5fWGw0TUFRPT1fRGdKUlVRQlJWUVFBRFZJS0J3QUFWUU1IQUFCV0IxQUFCRk1FVmxJR0F3TlRBVlpV.mp4" },
    { "player_name": "Jose Reyes", "video_url": "https://sporty-clips.mlb.com/S2xQbzJfWGw0TUFRPT1fVWdWWEFRSlZWMWNBRFZZS1h3QUFCMVFFQUFBSEJnSUFDMUFHQWdZTlV3SlhVbFlG.mp4" },
    { "player_name": "Nomar Mazara", "video_url": "https://sporty-clips.mlb.com/TjlXdjZfWGw0TUFRPT1fVUZJSEIxZFFYZ0FBQzFCV0JRQUFBVlZRQUFNRlVWSUFWbEpRVVFzREJ3QldCUUZS.mp4" },
    { "player_name": "Evan Longoria", "video_url": "https://sporty-clips.mlb.com/V2R6RFJfWGw0TUFRPT1fQWdZRFUxMENYbFFBRFZ0VVV3QUFWVlFDQUZnRlV3UUFCRkFIVVFwUVUxVlhBd3BS.mp4" },
    { "player_name": "Miguel Montero", "video_url": "https://sporty-clips.mlb.com/N1JEamJfWGw0TUFRPT1fVUFNRFZRRUFCRllBWEZNSFZ3QUFBZ1FEQUFOVFcxa0FWRkFBVWxJSFVGWlZWUVVF.mp4" },
    { "player_name": "Trea Turner", "video_url": "https://sporty-clips.mlb.com/QWFLTktfWGw0TUFRPT1fQkFNRUJsWUdBbEFBVzFBR1hnQUFCbE1IQUFCUlZsQUFVVklCVWdvTUJncFFBQVlD.mp4" },
    { "player_name": "Carlos Santana", "video_url": "https://sporty-clips.mlb.com/NTJvRGVfWGw0TUFRPT1fVlZOWVZsTlhWUUFBRGx0VFVnQUFCVmNDQUZnRlVBTUFCd1FBQmxVRlVBb0dVd1pX.mp4" },
    { "player_name": "Giancarlo Stanton", "video_url": "https://sporty-clips.mlb.com/ZzgybzNfWGw0TUFRPT1fVUFWU0FnWlJBQVFBWFFBRlVnQUFVQU5YQUZoVUJsRUFCVnhVQVFSWENWWUhVZ3RT.mp4" },
    { "player_name": "Byron Buxton", "video_url": "https://sporty-clips.mlb.com/WDJ4NWtfWGw0TUFRPT1fQXdWUUFWQU1Wd1FBRGxGWFZBQUFVQUJXQUFBTVVBQUFWMXdDQWdCVUJBZFdCd2Rl.mp4" },
    { "player_name": "Melky Cabrera", "video_url": "https://sporty-clips.mlb.com/Vk1lYWFfWGw0TUFRPT1fVkFJQVZGWlNYd0VBRGxRQlZ3QUFCQTRIQUZrRUJnTUFBRk1IVXdzRFZRWldWVlJR.mp4" },
    { "player_name": "Scott Schebler", "video_url": "https://sporty-clips.mlb.com/T2x6blJfWGw0TUFRPT1fVWdZSEJWMEZYZ3NBWGxSVFVRQUFVMVZSQUFBQlVsTUFVMU1OVWdKV1VsVlJDQW9F.mp4" },
    { "player_name": "Curtis Granderson", "video_url": "https://sporty-clips.mlb.com/ajlhWFpfWGw0TUFRPT1fQkFFRlZnSUdBZ1VBV2x0V1hnQUFCZ0JTQUZrR1VsY0FWbElCQ1ZkUlZRZFNWbEJW.mp4" },
    { "player_name": "Nomar Mazara", "video_url": "https://sporty-clips.mlb.com/TTc5ZFlfWGw0TUFRPT1fVlFKWFUxRURBd0VBRDFGUkJBQUFBQU5mQUFOWEJnUUFWMVJXQVZkUVVGRlFWUUZS.mp4" },
    { "player_name": "Jean Segura", "video_url": "https://sporty-clips.mlb.com/UTJRZzFfWGw0TUFRPT1fQVFKUVZsRlZYZ0FBRGdRRVVnQUFVRkFFQUFCUlYxWUFVRmNEVXdBTVZWY0FDUUZl.mp4" },
    { "player_name": "Charlie Blackmon", "video_url": "https://sporty-clips.mlb.com/UTJRZzFfWGw0TUFRPT1fRGxJRUIxSldCQVlBQ0ZBREJRQUFBUU5SQUFNR1d3Y0FBZ0FOQUFaUlVBWlZVUVJS.mp4" },
    { "player_name": "Marcus Semien", "video_url": "https://sporty-clips.mlb.com/ekxxZ3ZfWGw0TUFRPT1fVXdNRVVRSlNWZ0FBQ1FFQUF3QUFCQVlIQUFCVFYxTUFDd05SQkZWUUNBUlNCUUVF.mp4" },
    { "player_name": "Kyle Jensen", "video_url": "https://sporty-clips.mlb.com/NjlsQk5fWGw0TUFRPT1fVkFBSFZ3VUFWQVlBQzFZRkJ3QUFWUUVBQUFNQUFsSUFCUUFGQmdaUUFWQmRWUVJW.mp4" },
    { "player_name": "Sean Rodriguez", "video_url": "https://sporty-clips.mlb.com/Mk9vanhfWGw0TUFRPT1fQmdjQUJ3Y0ZWUU1BQVFGWFZ3QUFBdzlmQUZrSFV3UUFVMTFXQlZaUlZGRUFCZ29I.mp4" },
    { "player_name": "Matt Adams", "video_url": "https://sporty-clips.mlb.com/cjhCYmtfWGw0TUFRPT1fQVZSV0IxMVhBMWNBQ3dGUlV3QUFVd1ZYQUFBQlVsZ0FWQUFOVlZVTkFRVUFWZ01D.mp4" },
    { "player_name": "Evan Gattis", "video_url": "https://sporty-clips.mlb.com/azkyd3ZfWGw0TUFRPT1fQlFsVVZnY01BMVlBRFZjS0FBQUFWRkJRQUFCWFVnY0FBRk1DQjFBRkFRRUVBQUFD.mp4" },
    { "player_name": "Chris Carter", "video_url": "https://sporty-clips.mlb.com/OTlxUmJfWGw0TUFRPT1fVUFNQVhRVUVCUUVBRDFKVVVnQUFWd05mQUFCWFZRTUFWbEZXVkFJTkJGVUJDRk5m.mp4" },
    { "player_name": "Andrelton Simmons", "video_url": "https://sporty-clips.mlb.com/WjQzUWdfWGw0TUFRPT1fVWxBSEJ3VU5YbGNBRDFCUkJ3QUFBQUZlQUFBQVdnUUFVd05VVXdkUkF3UmNDVlJU.mp4" },
    { "player_name": "Joey Wendle", "video_url": "https://sporty-clips.mlb.com/bGUyNEdfWGw0TUFRPT1fVjFjRUJWY01VZ1FBWGdFSEFnQUFCdzhDQUFBRkFGRUFBRjBFVVFzRENGZFJWVmNG.mp4" },
    { "player_name": "Kendrys Morales", "video_url": "https://sporty-clips.mlb.com/Qm85NFZfWGw0TUFRPT1fRHdZQUFGY0RBd1lBRDFvTFZRQUFWd0VDQUZrQkJWY0FBRk5YQmdRQlV3QUFVUUpW.mp4" },
    { "player_name": "Todd Frazier", "video_url": "https://sporty-clips.mlb.com/b1oxNGdfWGw0TUFRPT1fVUFWVlYxVldWUVVBRDFkWFZ3QUFDUU1DQUFNTVV3TUFCRkVBQWxGVEIxRldWbFpR.mp4" },
    { "player_name": "Trea Turner", "video_url": "https://sporty-clips.mlb.com/MzR3Wk5fWGw0TUFRPT1fQkFSWFZWSURWUW9BV1ZKVVVRQUFWMU5UQUFBQlVGY0FWMUlEQlFSV0F3RlVBZ3RW.mp4" },
    { "player_name": "Nomar Mazara", "video_url": "https://sporty-clips.mlb.com/ZThRZ0dfWGw0TUFRPT1fVUFWVFZBSU1BbFlBQ0ZFQUJ3QUFDUVpmQUFOUVZRUUFBMXhRQ1FNRVZWQlFCZ3NG.mp4" },
    { "player_name": "Rene Rivera", "video_url": "https://sporty-clips.mlb.com/MFdvOTdfWGw0TUFRPT1fVWdoWlZnSlJWd2NBV2x0UkFBQUFCQU5TQUFBQldsVUFCMU1NVkFZSFZBUmNWbFJl.mp4" },
    { "player_name": "Paul Goldschmidt", "video_url": "https://sporty-clips.mlb.com/QWFLM2dfWGw0TUFRPT1fQWdCVFUxMVhCRk1BWEFZRFV3QUFCZ1lIQUFNRFZBY0FVQWRYVmxJTkJsQlVCRlpU.mp4" },
    { "player_name": "Kurt Suzuki", "video_url": "https://sporty-clips.mlb.com/dlA0TDNfWGw0TUFRPT1fQVZCVUFsWlhWbEFBV2dBQ1hnQUFBUVVFQUZsUVcxa0FDd01IQlZFSEJ3QmNWUWND.mp4" },
    { "player_name": "Jean Segura", "video_url": "https://sporty-clips.mlb.com/UTJRZzFfWGw0TUFRPT1fQTFCVlZGSlhVd2NBQ2dSV0J3QUFDUUVEQUZnREFnUUFVQWNGQVZFQ0NWSlZCd1lB.mp4" },
    { "player_name": "Ryan Raburn", "video_url": "https://sporty-clips.mlb.com/YjlLZTlfWGw0TUFRPT1fVWdaWlZRZFhYZ29BREZwUVVnQUFCZ0VEQUFCV1VGQUFVVlJYQlFVQlVBY0dCZ1pY.mp4" },
    { "player_name": "James McCann", "video_url": "https://sporty-clips.mlb.com/eU45eGVfWGw0TUFRPT1fQVZWWFV3SUJVUUlBV1ZSVUJ3QUFBQU5SQUFCV1cxWUFBVklOQUZJTkFnWUhVd2Rl.mp4" },
    { "player_name": "Daniel Descalso", "video_url": "https://sporty-clips.mlb.com/cjhCYmtfWGw0TUFRPT1fQUZRRVhWVURYbEVBQ2daVFV3QUFDUUZYQUFCVEFRUUFVd2NGQmdjRVZWQlNWZ0VD.mp4" },
    { "player_name": "Evan Gattis", "video_url": "https://sporty-clips.mlb.com/azkyd3ZfWGw0TUFRPT1fQkFaWEFWd0dVMU1BWFZBQVVnQUFVZ2RlQUFBRUJ3SUFCMWNHQjFJRVZRVlRDUUFD.mp4" },
    { "player_name": "Asdrubal Cabrera", "video_url": "https://sporty-clips.mlb.com/MFdvOTdfWGw0TUFRPT1fVlZjRUJsVlFYbFFBRGdOWFV3QUFWd1pVQUFNTkJsWUFCVk5YQVFKVEIxVUJWVk1G.mp4" },
    { "player_name": "Hanley Ramirez", "video_url": "https://sporty-clips.mlb.com/TTc5TDVfWGw0TUFRPT1fQUFWUkFBRldCVkFBQVZaUkJRQUFDUWNDQUZnREJnQUFWRkZVQVFZRUNRUmNCRkFG.mp4" },
    { "player_name": "Orlando Arcia", "video_url": "https://sporty-clips.mlb.com/N1JEamJfWGw0TUFRPT1fVWdSVFhRY01WbE1BQ2xZSEFnQUFDQVlGQUZnRlZRTUFBMUJVQWdCUlVBcFVBRlpY.mp4" },
    { "player_name": "Jose Abreu", "video_url": "https://sporty-clips.mlb.com/cjhCZUtfWGw0TUFRPT1fQXdSVkJnZFFVZ1lBRGxKVVZ3QUFVd1lDQUFBSEFsRUFBQUFCVlZjQUJRdFZDQXNF.mp4" },
    { "player_name": "Trey Mancini", "video_url": "https://sporty-clips.mlb.com/cTZZTTRfWGw0TUFRPT1fQWdoVUFWSUVWQUlBV2xJREF3QUFCUVFBQUZsVUJWY0FBbEJRQUZWVEJWVUJCQUlF.mp4" },
    { "player_name": "Brandon Belt", "video_url": "https://sporty-clips.mlb.com/eDlLZGtfWGw0TUFRPT1fQlFaVFZWeFFCMUVBQUFjRkFnQUFBRmNEQUZrTVcxa0FCd1FOQUFBTkFRWUhVMUZY.mp4" },
    { "player_name": "Bobby Wilson", "video_url": "https://sporty-clips.mlb.com/bGUyM3JfWGw0TUFRPT1fVWxNRFhBVUFVbE1BRGxWVEJRQUFCZ0JWQUFBRlZnTUFCbDBEQlFFQkFGSUFBMU5S.mp4" },
    { "player_name": "Scooter Gennett", "video_url": "https://sporty-clips.mlb.com/N1JEamJfWGw0TUFRPT1fQXdCVFZGTUZWQUlBQ2xwVFZBQUFDUU5WQUFBTVZsWUFWbGNFQkFJQUJBWlZDUUJT.mp4" },
    { "player_name": "Xander Bogaerts", "video_url": "https://sporty-clips.mlb.com/UTJRNzFfWGw0TUFRPT1fVUFSWlZGQUhVd1FBRGdFRlZ3QUFBd05RQUFNQ1ZsTUFCVlVCQ1F0VEJnc0FVVlpR.mp4" },
    { "player_name": "Curtis Granderson", "video_url": "https://sporty-clips.mlb.com/ajlhWFpfWGw0TUFRPT1fVlFsVFVsRUhWUU1BQ1FNRFV3QUFCRk5lQUFBRkFnVUFBZ2NOQkFJRUJsZFZBZ0pV.mp4" },
    { "player_name": "Nelson Cruz", "video_url": "https://sporty-clips.mlb.com/ajk3NHZfWGw0TUFRPT1fQWdNRVZ3WU5WQUVBVzFCVFVnQUFWVlZVQUFCUVdsRUFWQUVBQVFZQ0FWVlJCZ1VB.mp4" },
    { "player_name": "Mitch Haniger", "video_url": "https://sporty-clips.mlb.com/MzRLUjRfWGw0TUFRPT1fQXdKWFV3RlJWUWNBRFFjRFZnQUFWd0pTQUFBRFZGZ0FCd0VOQ1FRRkFnSldWQUpS.mp4" },
    { "player_name": "Chase Utley", "video_url": "https://sporty-clips.mlb.com/RzY4OUxfWGw0TUFRPT1fQWxjSFhWQldCRkVBQ2dNQ1V3QUFCbEpSQUZoV0FnUUFCRkVNVlZBRUJsQlVCd0VG.mp4" },
    { "player_name": "Marcus Semien", "video_url": "https://sporty-clips.mlb.com/azlhTVdfWGw0TUFRPT1fQTFCVEFBRUdWUU1BQUZRS1Z3QUFBZ1FEQUFOUVUxZ0FCZ1pRQmxVRUF3VUdBbEZS.mp4" },
    { "player_name": "Justin Morneau", "video_url": "https://sporty-clips.mlb.com/OTlxb2pfWGw0TUFRPT1fQkFaWUIxME5Cd0lBQVZNQlVRQUFCUVpXQUFNQVcxVUFCd1pUVmdRRlV3ZFZBQUVE.mp4" },
    { "player_name": "David Ortiz", "video_url": "https://sporty-clips.mlb.com/UGdiZWRfWGw0TUFRPT1fQlFaVVhBRUFWd3NBWEFFTFVRQUFWRlZlQUZrQ1VWRUFBVlpVQ1FRTkJsWlZWUWRT.mp4" },
    { "player_name": "Hyun Soo Kim", "video_url": "https://sporty-clips.mlb.com/d1dYbk5fWGw0TUFRPT1fQmdnRUJRVUdCMU1BQ2djS1h3QUFCZzVTQUZrRFVWUUFDZ1FNQmdjQ0FsWmNBQXRW.mp4" },
    { "player_name": "J.D. Martinez", "video_url": "https://sporty-clips.mlb.com/NTJNek5fWGw0TUFRPT1fVlFsUlhBWU5CQUlBQ1ZzREJRQUFWd1pWQUFNTlVsa0FWMUVCQ0F0UkNRQUdBQUVI.mp4" },
    { "player_name": "Coco Crisp", "video_url": "https://sporty-clips.mlb.com/NTJNek5fWGw0TUFRPT1fVUFCWlVnZFhBZ0FBRGxBQ1VBQUFCVmRSQUZnRFdsUUFVRk5RQWdJQVV3c0hVd1pU.mp4" },
    { "player_name": "Curt Casali", "video_url": "https://sporty-clips.mlb.com/ZHpranZfWGw0TUFRPT1fVkZVQVVsY01WQUlBQUZKV0JRQUFWVlZTQUFCVVd3SUFVQUFDQ1FOVUFGWlRBZ1Zl.mp4" },
    { "player_name": "Max Kepler", "video_url": "https://sporty-clips.mlb.com/S2xQMjJfWGw0TUFRPT1fVXdSVVUxSUFCVk1BRFZSVFVnQUFCd1VEQUFCVUJnVUFVRlpYVkZVQ0FnVlNWUUlE.mp4" },
    { "player_name": "Josh Donaldson", "video_url": "https://sporty-clips.mlb.com/ekw2enhfWGw0TUFRPT1fVUZKUkJsUUVWZ29BWEZwUkFBQUFVZ0JmQUFOUVdnVUFCbGNCQ1ZWWFVGVURVbFlE.mp4" },
    { "player_name": "Miguel Cabrera", "video_url": "https://sporty-clips.mlb.com/QWFxbHhfWGw0TUFRPT1fVWdkWkJWSlFWQVFBV3dOV1Z3QUFBRkJWQUZoUlVGZ0FDZ1pRVkFNTUFsSUhDUVlF.mp4" },
    { "player_name": "Rougned Odor", "video_url": "https://sporty-clips.mlb.com/b1o3UFFfWGw0TUFRPT1fQVZCWUJnRU1WRkVBQ2xBREJRQUFBd0JlQUZnSFZGTUFDZ1lNQkFFSEFRSlJVUWRX.mp4" },
    { "player_name": "Wilmer Difo", "video_url": "https://sporty-clips.mlb.com/T2xqZUdfWGw0TUFRPT1fQTFJQVZWVlFBQUVBQ1ZJR0J3QUFCbFJlQUFNQ1d3VUFCVlJXQmxVQ0FWVUVBUUFI.mp4" },
    { "player_name": "Pedro Alvarez", "video_url": "https://sporty-clips.mlb.com/ekw2NVdfWGw0TUFRPT1fQmdoVkJsQU5CVmNBRGxGV1h3QUFCZ1JlQUFCUlZGRUFDZ1lCQWdJTkIxY0dCbEZT.mp4" },
    { "player_name": "Aaron Hicks", "video_url": "https://sporty-clips.mlb.com/NE05Mm9fWGw0TUFRPT1fRHdoUkFBRUFVUVVBRDFJS1VBQUFCQUFEQUZnTlVnUUFVMVJRVmdFRlV3QUhBMUJS.mp4" },
    { "player_name": "Mark Teixeira", "video_url": "https://sporty-clips.mlb.com/NE05Mm9fWGw0TUFRPT1fVndBRlZGSlNBbE1BRFZkVFV3QUFDVk1FQUZnRlVWTUFCUUVOVVFBQUJGSlNVZ2NI.mp4" },
    { "player_name": "Adam Duvall", "video_url": "https://sporty-clips.mlb.com/Qm94T2JfWGw0TUFRPT1fVkZNRlVRZFJYd01BQVZKVEFBQUFWd0JlQUFBQkFsSUFDbEpYVTFWVUF3dFFBQVJV.mp4" },
    { "player_name": "Tyler Flowers", "video_url": "https://sporty-clips.mlb.com/UjJqUE5fWGw0TUFRPT1fRGdjRkFRRUdYMU1BV2x0UlVRQUFBd01FQUZsUVd3UUFWd1pVQndCV0FnVlFVVkJW.mp4" },
    { "player_name": "Tim Anderson", "video_url": "https://sporty-clips.mlb.com/ZHpranZfWGw0TUFRPT1fVkZOVEJsRlFVRkVBWFZSUlV3QUFCd2RWQUZrQlZRUUFDMUlDVVFRTlZBTlJCd05U.mp4" },
    { "player_name": "Kole Calhoun", "video_url": "https://sporty-clips.mlb.com/azlhTVdfWGw0TUFRPT1fQlFSUVZGd0VCQUlBQ1FZQVVnQUFBVk5WQUZrSEJsZ0FVd1FOQUFGV0NBc0JDUUVF.mp4" },
    { "player_name": "Logan Forsythe", "video_url": "https://sporty-clips.mlb.com/OHdsS2VfWGw0TUFRPT1fVUZKV0J3RlJCQUFBWGdCUVZRQUFVZ1JRQUZsUkJ3Y0FCRlpSQ1ZZTkFnSlNCRkJT.mp4" },
    { "player_name": "Justin Upton", "video_url": "https://sporty-clips.mlb.com/NTJNS0dfWGw0TUFRPT1fRHdnQ1ZsQU1CQVFBQ0ZRRVhnQUFBMVVFQUZsVUJnTUFBbEFNVWdNR1Z3Y0dWUVpU.mp4" },
    { "player_name": "Gary Sanchez", "video_url": "https://sporty-clips.mlb.com/Yjl4d3pfWGw0TUFRPT1fVkFkUUFBVUNCVkFBQ1FaUlZnQUFDQUFIQUFCUkJsTUFBbFVFQ0ZVR0J3SUdVbEFD.mp4" },
    { "player_name": "Jonathan Villar", "video_url": "https://sporty-clips.mlb.com/b1o3UFFfWGw0TUFRPT1fQWxSVVhRVUdBbFlBWFZjS1h3QUFCMVVIQUFBQ1dnY0FWRlZSQ0ZZRUFsQlNDRlpU.mp4" },
    { "player_name": "Joc Pederson", "video_url": "https://sporty-clips.mlb.com/RzY4OUxfWGw0TUFRPT1fQVZVREJWVlZVbEVBQzFOWFVRQUFCZ0ZVQUFOUkJsTUFBRkVHQ1FvRENWQlhBZ3BX.mp4" },
    { "player_name": "Salvador Perez", "video_url": "https://sporty-clips.mlb.com/NTJNS0dfWGw0TUFRPT1fQlZNQ1UxY0ZCd0VBV1FFSEJRQUFVZ1plQUFOUVVnY0FVQVlIVWxCWFVBSUJCd3NE.mp4" },
    { "player_name": "Aaron Hill", "video_url": "https://sporty-clips.mlb.com/Yjl4d3pfWGw0TUFRPT1fRDFSVVYxTUFWUWNBRGdZQkFBQUFWdzlVQUZrRVVWWUFWbGRVQmdwWFVGVlJVbEZS.mp4" },
    { "player_name": "George Springer", "video_url": "https://sporty-clips.mlb.com/UTJiT0dfWGw0TUFRPT1fVlFkWUJsVUVCd0lBWGxVRVZRQUFWRkFIQUFBRUFnQUFVRlVDQTFJQlZBc0dWZ1lD.mp4" },
    { "player_name": "Maikel Franco", "video_url": "https://sporty-clips.mlb.com/REF5eERfWGw0TUFRPT1fQmxJQUJ3SU5CUWNBVzFKWFVnQUFVbFZVQUFNR1YxRUFWd05XQmdWWEFsRldVZ0JS.mp4" },
    { "player_name": "Manny Pina", "video_url": "https://sporty-clips.mlb.com/Mk82blFfWGw0TUFRPT1fQVFOVkFsVUJYd0lBVzFjRFhnQUFVbGRSQUFBRlZsY0FCd0ZXQ0FvRUJnQlVCbEFI.mp4" },
    { "player_name": "Matt Adams", "video_url": "https://sporty-clips.mlb.com/V2RlQk5fWGw0TUFRPT1fVWdoWlZsTlNBd1lBQ2xjQVh3QUFVRmRVQUFNRFVWTUFVMWNHQTFJSEJBTlVWRlpT.mp4" },
    { "player_name": "Randal Grichuk", "video_url": "https://sporty-clips.mlb.com/V2RlQk5fWGw0TUFRPT1fRHdaWEFnSlFWUVVBV2djQ0JRQUFWRkJUQUFCUkIxa0FBRkpXVlFvQUJGVlRVbEFD.mp4" },
    { "player_name": "Christian Yelich", "video_url": "https://sporty-clips.mlb.com/V2Rla05fWGw0TUFRPT1fQVFjQ1VRSUhBd0VBV1FSV0J3QUFCZ0ZYQUZsV0FnY0FCRkJSVlZBR0JRRlFVUUpR.mp4" },
    { "player_name": "Joey Votto", "video_url": "https://sporty-clips.mlb.com/OTlxYmpfWGw0TUFRPT1fRHdrRVUxd0RCUVFBV2xvRUFnQUFWMU1FQUZnTUFGVUFVd0FNVkFJRUNBUlNBQVFE.mp4" },
    { "player_name": "Ben Zobrist", "video_url": "https://sporty-clips.mlb.com/OTlxYmpfWGw0TUFRPT1fVlZOUlUxME5WUVlBQ0FCWFVBQUFVRklFQUFNTUIxUUFDbE5VQUZaV0FsQUdVZ1lD.mp4" },
    { "player_name": "Freddie Freeman", "video_url": "https://sporty-clips.mlb.com/eDlOV2FfWGw0TUFRPT1fQndCU0FGSUJYbEVBQ3dNQ1ZnQUFWUWRYQUFNRkFnQUFBVkpYVXdVTkFRdFVBVk5S.mp4" },
    { "player_name": "Nick Markakis", "video_url": "https://sporty-clips.mlb.com/eDlOV2FfWGw0TUFRPT1fQTFRSEFRVlhBMVlBQ0ZCUkJBQUFDQUZmQUFOUUIxZ0FWZ1JSQ0F0V1VBRlJDVk5S.mp4" },
    { "player_name": "Cheslor Cuthbert", "video_url": "https://sporty-clips.mlb.com/T2xqTUdfWGw0TUFRPT1fVlZkUkJ3WlZCd1FBQzFZQ1VnQUFBbElDQUFNRVZWTUFWRlVHQlZCUUExZFhVVk1F.mp4" },
    { "player_name": "Ian Kinsler", "video_url": "https://sporty-clips.mlb.com/ekw2RHhfWGw0TUFRPT1fRGdCWFUxd01WbFlBQ2dZS0FnQUFBUVJRQUFBQlVsWUFVRmNHQkF0UUJGZGRBMUZl.mp4" },
    { "player_name": "Rougned Odor", "video_url": "https://sporty-clips.mlb.com/N1JxYjBfWGw0TUFRPT1fVndnRFhGUUFYd1VBWGdBQkJRQUFCVkpYQUZsVFYxUUFBVkZXQWdFQ0JRQUJDVkZW.mp4" },
    { "player_name": "Yasmany Tomas", "video_url": "https://sporty-clips.mlb.com/REF5dzZfWGw0TUFRPT1fQVZkV1VBY0JWUU1BRFFaVUJBQUFBUUZUQUZoWEFBTUFCUVJYQXdvR0FsSlJVZ3BY.mp4" },
    { "player_name": "Mitch Haniger", "video_url": "https://sporty-clips.mlb.com/REF5dzZfWGw0TUFRPT1fRGxWWUFWZFJVVk1BQzF0V1ZnQUFVQWNEQUZnQVVsUUFBUVJRVkFVRlVnUURWZ1pS.mp4" },
    { "player_name": "Domingo Santana", "video_url": "https://sporty-clips.mlb.com/WWt4d3JfWGw0TUFRPT1fQVFSV1YxVU1CQUVBRHdCVVVRQUFBdzlRQUZnQkJWZ0FDZ0JSVmdZR0F3VlNCd3RT.mp4" },
    { "player_name": "Mark Trumbo", "video_url": "https://sporty-clips.mlb.com/S2xQT2pfWGw0TUFRPT1fQTFOWVV3VlFBbEVBRFZjQ1V3QUFBbFJVQUFOV1dsa0FBd2NCQUZJRFUxQlFDQUFD.mp4" },
    { "player_name": "Brandon Belt", "video_url": "https://sporty-clips.mlb.com/UGdiUGxfWGw0TUFRPT1fQlFrRFV3QUdWUW9BQzFvS1ZnQUFWQWRVQUFBTlV3QUFCbEZVQmdVTUJ3ZFVDQUZm.mp4" },
    { "player_name": "Robinson Cano", "video_url": "https://sporty-clips.mlb.com/b1o3M1FfWGw0TUFRPT1fQWxCU0JsQlNBRmNBQ1ZKVEJBQUFVZ1pXQUZoVEFGWUFDbEVFQWxGUUJWRmRBbE1G.mp4" },
    { "player_name": "Yan Gomes", "video_url": "https://sporty-clips.mlb.com/T2xqTUdfWGw0TUFRPT1fQndKVUFWZFZVRlFBV2xvQkJ3QUFBRk5XQUFBRFZsSUFVRndCQlZGUUJBWUhDQW9F.mp4" },
    { "player_name": "Paul Goldschmidt", "video_url": "https://sporty-clips.mlb.com/eU40QlJfWGw0TUFRPT1fVUZkWUIxVUVCQVFBV2xZRUF3QUFCbGNBQUFNTlVWQUFWMUFOVVFBTkFBc0FVUU5R.mp4" },
    { "player_name": "Jedd Gyorko", "video_url": "https://sporty-clips.mlb.com/YTJvUEdfWGw0TUFRPT1fQUFjQ1VGSlNWUUVBQVFFRkFnQUFCd1JSQUFOUUFBSUFBd0VDQWdjTUFnY0dBQUpS.mp4" },
    { "player_name": "Gary Sanchez", "video_url": "https://sporty-clips.mlb.com/ZHoyNnpfWGw0TUFRPT1fQVFWUVVGVUJCVlFBQUZFSFV3QUFBUTVUQUFNTkFWRUFCMXhYQlFBTlV3Y0VWZ0FI.mp4" },
    { "player_name": "Alexei Ramirez", "video_url": "https://sporty-clips.mlb.com/b1oxMkRfWGw0TUFRPT1fQWxNRVYxVUhCVllBV1ZvTEFnQUFBUUJUQUZnR1ZGQUFBUU1HVWdBQUJ3VlhVZ0FF.mp4" },
    { "player_name": "Nolan Reimold", "video_url": "https://sporty-clips.mlb.com/eU45OFBfWGw0TUFRPT1fQjFOWEFsUUJCVk1BV2xaUVZnQUFVd2RlQUZoUVdsWUFVMWNBVTFVR0JsSlZWUUJW.mp4" },
    { "player_name": "Jonathan Schoop", "video_url": "https://sporty-clips.mlb.com/eU45OFBfWGw0TUFRPT1fQjFjRUJRQlZBbGNBQVFkVFZ3QUFVbEpRQUZsVEJsZ0FDMUJSQ0FFREJnQlVCd0ZY.mp4" },
    { "player_name": "Jorge Polanco", "video_url": "https://sporty-clips.mlb.com/cjhCN2VfWGw0TUFRPT1fQUFjQVUxUU5CVkFBRGxvRVVBQUFWRklIQUFBR0FnTUFBVlVHQ0FjR1V3VlNWUU5Y.mp4" },
    { "player_name": "Keon Broxton", "video_url": "https://sporty-clips.mlb.com/eDlLclBfWGw0TUFRPT1fQndSUkFBVUVCd29BREZkWFhnQUFBQU5WQUFBSFYxRUFCbHhXVlFJR0JWQlFCUUZl.mp4" },
    { "player_name": "Chris Carter", "video_url": "https://sporty-clips.mlb.com/eDlLclBfWGw0TUFRPT1fQUZVRFVGSlhBMUVBRGxJQkFnQUFDVlZUQUFBR0J3Y0FBUWNOQmdvQkFnUlRCRlJY.mp4" },
    { "player_name": "Nelson Cruz", "video_url": "https://sporty-clips.mlb.com/RzY1bmpfWGw0TUFRPT1fQWdGVVZsSlhBRllBWFFZR0JRQUFBVmNGQUFBRUFsVUFVd05SQkFNR0FGRmRCRlJU.mp4" },
    { "player_name": "Yasmany Tomas", "video_url": "https://sporty-clips.mlb.com/dlA0cTRfWGw0TUFRPT1fQVZOWVVsQUJYbE1BRGxFRVZ3QUFVZ01FQUFBSFdnUUFVUUZSQ0ZKUlVBUUJDQUlI.mp4" },
    { "player_name": "David Ortiz", "video_url": "https://sporty-clips.mlb.com/NTJvR1BfWGw0TUFRPT1fQVZCWVhWMVJYd2NBREZjR1Z3QUFWRmRYQUZoVVZsY0FBMXdNQmxkVVZ3ZFZVZ2NF.mp4" },
    { "player_name": "James Loney", "video_url": "https://sporty-clips.mlb.com/MXFvOFJfWGw0TUFRPT1fQXdaVkFRVlZCVkFBREZBS1hnQUFWd1pmQUZnR1ZnY0FCVkZXQlZjTlZBdGRDQU5T.mp4" },
    { "player_name": "Mat Latos", "video_url": "https://sporty-clips.mlb.com/UGd6bldfWGw0TUFRPT1fVkFkVkFGRlNYZ0lBVzFwWFZRQUFCUUZRQUZrTVd3VUFVRjFRVVFZRUExWlNCZ0JS.mp4" },
    { "player_name": "Freddy Galvis", "video_url": "https://sporty-clips.mlb.com/WjQzZ2dfWGw0TUFRPT1fRDFWVFhWRlhBZ3NBQ1ZZQlhnQUFBdzVWQUZrREJ3TUFDMUVNQ0FCVEFBRlJWVmRY.mp4" },
    { "player_name": "Justin Turner", "video_url": "https://sporty-clips.mlb.com/OTkza3dfWGw0TUFRPT1fRGdsV0FWZFhBQWNBWEFNQlVRQUFCMU5YQUZrSEFWa0FCMVVNQ0F0WFZRUlFCbGRS.mp4" },
    { "player_name": "Yasiel Puig", "video_url": "https://sporty-clips.mlb.com/OTkza3dfWGw0TUFRPT1fVjFCVkJWMVNVQUFBWFZwVFVBQUFVQTlUQUZrRlUxUUFDZ2NNVWxGUlVnTUdWUUZR.mp4" },
    { "player_name": "Jose Bautista", "video_url": "https://sporty-clips.mlb.com/Mk9vZ1BfWGw0TUFRPT1fQWdrSFZsUURYZ0lBWEZVRVVnQUFCQU5XQUZnTlVBUUFBbHhUVWxJSFVnUlZVUVpR.mp4" },
    { "player_name": "Nick Markakis", "video_url": "https://sporty-clips.mlb.com/TTc5VjVfWGw0TUFRPT1fVXdVQUFWUUNVQW9BVzF0VFVnQUFBQWRSQUFBQ1V3VUFBMVJSVTFVQkIxRUhWbE1I.mp4" },
    { "player_name": "Rougned Odor", "video_url": "https://sporty-clips.mlb.com/bk0ycXZfWGw0TUFRPT1fQWdKUUJnWlJVZ0lBWGdRTEFBQUFBbGRVQUFCUVZsWUFBbEJYQUZGV0NBVlRWUUpl.mp4" },
    { "player_name": "Mitch Haniger", "video_url": "https://sporty-clips.mlb.com/S2w2V3ZfWGw0TUFRPT1fQWxSVkFWZFFBRkVBQ2dkVVZBQUFWRk5XQUFOVEJWY0FBRmNOQlFZTkNBcFNBRk5l.mp4" },
    { "player_name": "Robinson Cano", "video_url": "https://sporty-clips.mlb.com/cTZZYnpfWGw0TUFRPT1fVWdOVUJWSUFWQVFBRHdjRUJ3QUFBbFZTQUFBTUFGQUFCRndEVWdzQkJ3TlNWUVlI.mp4" },
    { "player_name": "Jonathan Schoop", "video_url": "https://sporty-clips.mlb.com/Qm85TlFfWGw0TUFRPT1fQjFOUVVsUlNWMVlBQzFNRVVBQUFCQVZRQUZrQ1VWWUFWQVFDQUFJRlVBWlFWQVFB.mp4" },
    { "player_name": "Freddy Galvis", "video_url": "https://sporty-clips.mlb.com/MzR3QVFfWGw0TUFRPT1fQWdCVkJsSlhBMWNBV1FRTEFBQUFVd2RSQUZoUkJWSUFBUUVNQTFWV0NRRldWQUpW.mp4" },
    { "player_name": "Ryan Braun", "video_url": "https://sporty-clips.mlb.com/TTc5Vk5fWGw0TUFRPT1fRGdBRUFsQldWZ0VBQ2xzR0F3QUFVQUpRQUZrRVVGY0FDMWNFQ0FRSFUxQlVCUXBS.mp4" },
    { "player_name": "Addison Russell", "video_url": "https://sporty-clips.mlb.com/WDJ4cllfWGw0TUFRPT1fVjFkUVhRWUVCQVFBQ2xNTEJBQUFVd1VDQUZrSEJsWUFCd1FNVkZVQUJRSUdVd0pY.mp4" },
    { "player_name": "David Ortiz", "video_url": "https://sporty-clips.mlb.com/TjlXcTZfWGw0TUFRPT1fVXdRQ0JWd01Wd0lBRGdRQlZBQUFWRmRUQUZsUlZsWUFCd0VGQXdJQ0JnQlFBVlFD.mp4" },
    { "player_name": "Hanley Ramirez", "video_url": "https://sporty-clips.mlb.com/TjlXcTZfWGw0TUFRPT1fRGxkWFZGRUNWQUFBQ3dNQUFBQUFBQVFIQUFCUVYxUUFDZ1FEVlFzRFZBTlNWZ05U.mp4" },
    { "player_name": "Kaleb Cowart", "video_url": "https://sporty-clips.mlb.com/TjlXWGJfWGw0TUFRPT1fQmdkVFVnVU5BRk1BQ3dkVFhnQUFWMVZlQUZsUUFsY0FWd01IVkFzTUJBSUFVUUlD.mp4" },
    { "player_name": "Gary Sanchez", "video_url": "https://sporty-clips.mlb.com/MXFvTTNfWGw0TUFRPT1fRGdOWUJsTU1VUUVBV3dCUlVRQUFCUVpRQUFBSEJsQUFCQU5RQUZFRVZBdFRBVlJX.mp4" },
    { "player_name": "Xander Bogaerts", "video_url": "https://sporty-clips.mlb.com/WDJ4V05fWGw0TUFRPT1fQmdWVFZBVUZCRllBQ1ZZSEJRQUFVd0ZmQUFBSFZGRUFCMVFBVTFGWENBQUFVd3BR.mp4" },
    { "player_name": "Salvador Perez", "video_url": "https://sporty-clips.mlb.com/WDJ4V05fWGw0TUFRPT1fQmxKVlVsVUhWQUVBREFjREF3QUFWQTRFQUZnTkFsUUFCRndIQlFWWEJsVUJVbEJU.mp4" },
    { "player_name": "Nolan Arenado", "video_url": "https://sporty-clips.mlb.com/NE1vQU9fWGw0TUFRPT1fQmxVQUJsUUhYZ1lBV1ZkUlVBQUFBVlZYQUZrQVV3TUFDZ01DVkZBQUF3SlFWZ1FI.mp4" },
    { "player_name": "Bryce Harper", "video_url": "https://sporty-clips.mlb.com/NE1vQU9fWGw0TUFRPT1fVUFsWVhRRUVWQWNBRHdZQkJRQUFVd0pRQUFBQ1VWZ0FCRllDQVZFSFVGWlNCMUFE.mp4" },
    { "player_name": "Jose Altuve", "video_url": "https://sporty-clips.mlb.com/WjQzR0RfWGw0TUFRPT1fRGdKVlZWRUhBd2NBV2xjSFVRQUFBQWNGQUZnR0FWa0FBZ1FBVlFZREJGRUVDUWNG.mp4" },
    { "player_name": "Gregory Polanco", "video_url": "https://sporty-clips.mlb.com/YjlLWDRfWGw0TUFRPT1fVTFBRVVnVlZCMVlBRDFZS1ZnQUFBbFZVQUZsV1cxY0FCRkVIVmxKVFVGY0VBVlJT.mp4" },
    { "player_name": "Josh Donaldson", "video_url": "https://sporty-clips.mlb.com/OTkzMUFfWGw0TUFRPT1fVUZKVEFBY0hCUXNBQ1ZRSFh3QUFCUWRWQUFCWEFGSUFCMU1EQkFNSEFBcFhBQWRW.mp4" },
    { "player_name": "Matt Duffy", "video_url": "https://sporty-clips.mlb.com/WjQzR0RfWGw0TUFRPT1fQmxVQ1hWMVZVQWNBQzFVS1VRQUFWVmRUQUZsUUJWa0FCRlVNQlFSWFZRZFNVVlpS.mp4" },
    { "player_name": "Jedd Gyorko", "video_url": "https://sporty-clips.mlb.com/azkyb0tfWGw0TUFRPT1fVkFKVFVsVlhYZ1VBRGdOV0JBQUFWUVlIQUZrTkFBQUFDbDBIVlZZQUFBUlRBRk5W.mp4" },
    { "player_name": "Tyler Saladino", "video_url": "https://sporty-clips.mlb.com/MXFvcmdfWGw0TUFRPT1fVUFNREFsd0NBZ0VBV3djQVZBQUFWQUFEQUFNSFYxWUFVRndGVmxCUUF3Y0RDRlpl.mp4" },
    { "player_name": "Kris Bryant", "video_url": "https://sporty-clips.mlb.com/ZzgyZ2JfWGw0TUFRPT1fVndkWkFGSlZVUUFBRFFaUUFBQUFBd0lBQUZrQlVGTUFVRk5RVkFSWENGQlZCd3BU.mp4" },
    { "player_name": "Charlie Blackmon", "video_url": "https://sporty-clips.mlb.com/NTJvVzBfWGw0TUFRPT1fQWdjRVZGQlNVUUVBREZRRFhnQUFBbElEQUZnRkIxa0FBZ1pUVWdRRVZ3c0VWQXRX.mp4" },
    { "player_name": "Salvador Perez", "video_url": "https://sporty-clips.mlb.com/WDJ4V05fWGw0TUFRPT1fVWdKUlZBVlFBd1VBRHdSUUJRQUFCUUFIQUFCV1ZsSUFCUUZXQkZVR0FRRlhVUW9I.mp4" },
    { "player_name": "Avisail Garcia", "video_url": "https://sporty-clips.mlb.com/MXFvcmdfWGw0TUFRPT1fQUFWWEFGY0dBd3NBQ2djSFZnQUFBbEpXQUFCUUJWVUFWZ1pYVVFRQlZWZGNWQUJm.mp4" },
    { "player_name": "Denard Span", "video_url": "https://sporty-clips.mlb.com/WWsxMDNfWGw0TUFRPT1fRGxCUlhRQURVUUFBQVZSVEJRQUFDUVJYQUFOVEJsSUFVRkVEVkZaWFVnVUhBUUZX.mp4" },
    { "player_name": "Hernan Perez", "video_url": "https://sporty-clips.mlb.com/ZHoyb3ZfWGw0TUFRPT1fVjFJQVVnVUhVZ1VBRDFRRVhnQUFBd1ZSQUZoUlcxY0FBMVFNVVZZRVV3WlJVZ2RX.mp4" },
    { "player_name": "Kennys Vargas", "video_url": "https://sporty-clips.mlb.com/eDlLMGFfWGw0TUFRPT1fVlFsU0JWSUVBMVFBV2dGWEFBQUFCQUJUQUZrRlVWVUFBMUZRVlFkV1VBcFRBbE1E.mp4" },
    { "player_name": "Mark Trumbo", "video_url": "https://sporty-clips.mlb.com/RzY1MkxfWGw0TUFRPT1fQndoWlhGMEVCQVVBQ1FBR1VnQUFCZ0ZUQUZsV1UxUUFCQU1CQlZVQkJnTldCd0JU.mp4" },
    { "player_name": "Bryce Harper", "video_url": "https://sporty-clips.mlb.com/bGUyT29fWGw0TUFRPT1fVXdSWVVWWlFVZ1VBV2dBRkJRQUFCZzlTQUZrRlVWRUFCZ0FOQmdJR0JndFhDQUlE.mp4" },
    { "player_name": "Nick Markakis", "video_url": "https://sporty-clips.mlb.com/UGd4QXlfWGw0TUFRPT1fQVFCVkJWWlNWZ29BQ0ZVQUFBQUFVQTRBQUFOVVV3VUFVMWNNVWxkV0JsRUVWbFJY.mp4" },
    { "player_name": "B.J. Upton", "video_url": "https://sporty-clips.mlb.com/OTkzZWpfWGw0TUFRPT1fQUFSU1VRSUJVZ1lBQ2xFQlVnQUFCQUVDQUZoVFZGQUFWMXdFVmdOVENRc0RCRmNB.mp4" },
    { "player_name": "Christian Yelich", "video_url": "https://sporty-clips.mlb.com/WjQzUjhfWGw0TUFRPT1fVlZNRVZWUUZWUUFBWFFFS0J3QUFWQTVUQUZsUlZBTUFWZ05XVWdaV0FsSURBZ2NE.mp4" },
    { "player_name": "Adam Eaton", "video_url": "https://sporty-clips.mlb.com/UGd6cmxfWGw0TUFRPT1fQUFKWlUxMEdVMVlBRFFBSFVBQUFVRkpTQUFNQlVBSUFWd01EVVZBQkJnTUFCVk5V.mp4" },
    { "player_name": "Tyler Naquin", "video_url": "https://sporty-clips.mlb.com/eU45MFJfWGw0TUFRPT1fQndZRFhWUUdVUW9BWFZBRlhnQUFBUWRSQUFBRVcxZ0FVMWRRVkZWUVZGSmNCUXNF.mp4" },
    { "player_name": "Ryan Zimmerman", "video_url": "https://sporty-clips.mlb.com/bGUyT29fWGw0TUFRPT1fVkFKVFVRSlFWZ1VBV2xGVVZnQUFBVk5SQUZsV1VsRUFBZ1FHQVFZR0NRVUhWUW9E.mp4" },
    { "player_name": "Carlos Santana", "video_url": "https://sporty-clips.mlb.com/bk0yT2tfWGw0TUFRPT1fQUFKUkFGZFNCUU1BRDFJRVVRQUFCUUVIQUFNR1ZBUUFBVkJUVVFBQUF3dFRCVlFE.mp4" },
    { "player_name": "Brian McCann", "video_url": "https://sporty-clips.mlb.com/bk0yT2tfWGw0TUFRPT1fQkZKWlhGUlhBQU1BWEZNRVV3QUFCQThIQUZrQkJWTUFCRmRSVWdNR0JBTUhCVkZT.mp4" },
    { "player_name": "Yonder Alonso", "video_url": "https://sporty-clips.mlb.com/eU45RFJfWGw0TUFRPT1fVUFoVVZGQlFYZ29BRHdFQVVRQUFWdzVXQUZsUVYxSUFBZ1lOQ1FRQ1V3UmRBUUpm.mp4" },
    { "player_name": "Miguel Sano", "video_url": "https://sporty-clips.mlb.com/eDlLMGFfWGw0TUFRPT1fVXdoVlZsUlhBRk1BWGxFS0JBQUFBbE5TQUFNQ0FnY0FVd1FOQUFjRVZBVlNCRk5T.mp4" },
    { "player_name": "Nelson Cruz", "video_url": "https://sporty-clips.mlb.com/TTc5R1FfWGw0TUFRPT1fQkFBSFUxTUFWUUFBQ2dNRFZBQUFCd1pVQUFOUVdnQUFDd2NHVVZKV0F3cFdWUUlG.mp4" }
];

// Render data in the 'jsonData' div
const container = document.getElementById("jsonData");
playerData.forEach(player => {
    const playerDiv = document.createElement("div");
    playerDiv.innerHTML = `
        <p>
            ${player.player_name} - 
            <a href="${player.video_url}" target="_blank">Watch Video</a>
        </p>
    `;
    container.appendChild(playerDiv);
});

function findVideo() {
    const playerNameInput = document.getElementById('playerName').value.trim();
    const errorDiv = document.getElementById('error');

    // Clear previous errors
    errorDiv.textContent = '';

    if (!playerNameInput) {
        errorDiv.textContent = 'Please enter a player name.';
        return;
    }

    // Find the player in the data
    const player = playerData.find(player => 
        player.player_name.toLowerCase() === playerNameInput.toLowerCase()
    );

    if (!player) {
        errorDiv.textContent = 'Player not found. Please try again.';
        return;
    }

    // Open the video in a new tab
    window.open(player.video_url, '_blank');
}
