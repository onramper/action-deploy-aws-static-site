"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Separate test file since the archiving module doesn't work well with 'mock-fs'
const cloud_assembly_schema_1 = require("@aws-cdk/cloud-assembly-schema");
const lib_1 = require("../lib");
const bockfs = require("./bockfs");
const mock_aws_1 = require("./mock-aws");
let aws;
beforeEach(() => {
    bockfs({
        '/simple/cdk.out/assets.json': JSON.stringify({
            version: cloud_assembly_schema_1.Manifest.version(),
            files: {
                theAsset: {
                    source: {
                        path: 'some_dir',
                        packaging: 'zip',
                    },
                    destinations: {
                        theDestination: {
                            region: 'us-north-50',
                            assumeRoleArn: 'arn:aws:role',
                            bucketName: 'some_bucket',
                            objectKey: 'some_key',
                        },
                    },
                },
            },
        }),
        '/simple/cdk.out/some_dir/some_file': 'FILE_CONTENTS',
    });
    aws = mock_aws_1.mockAws();
    // Accept all S3 uploads as new
    aws.mockS3.listObjectsV2 = mock_aws_1.mockedApiResult({ Contents: undefined });
    aws.mockS3.upload = mock_aws_1.mockUpload();
});
afterEach(() => {
    bockfs.restore();
});
test('Take a zipped upload', async () => {
    const pub = new lib_1.AssetPublishing(lib_1.AssetManifest.fromPath(bockfs.path('/simple/cdk.out')), { aws });
    await pub.publish();
    expect(aws.mockS3.upload).toHaveBeenCalledWith(expect.objectContaining({
        Bucket: 'some_bucket',
        Key: 'some_key',
        ContentType: 'application/zip',
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwcGluZy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiemlwcGluZy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUZBQWlGO0FBQ2pGLDBFQUEwRDtBQUMxRCxnQ0FBd0Q7QUFDeEQsbUNBQW1DO0FBQ25DLHlDQUFrRTtBQUVsRSxJQUFJLEdBQStCLENBQUM7QUFDcEMsVUFBVSxDQUFDLEdBQUcsRUFBRTtJQUNkLE1BQU0sQ0FBQztRQUNMLDZCQUE2QixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDNUMsT0FBTyxFQUFFLGdDQUFRLENBQUMsT0FBTyxFQUFFO1lBQzNCLEtBQUssRUFBRTtnQkFDTCxRQUFRLEVBQUU7b0JBQ1IsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxVQUFVO3dCQUNoQixTQUFTLEVBQUUsS0FBSztxQkFDakI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLGNBQWMsRUFBRTs0QkFDZCxNQUFNLEVBQUUsYUFBYTs0QkFDckIsYUFBYSxFQUFFLGNBQWM7NEJBQzdCLFVBQVUsRUFBRSxhQUFhOzRCQUN6QixTQUFTLEVBQUUsVUFBVTt5QkFDdEI7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7UUFDRixvQ0FBb0MsRUFBRSxlQUFlO0tBQ3RELENBQUMsQ0FBQztJQUVILEdBQUcsR0FBRyxrQkFBTyxFQUFFLENBQUM7SUFFaEIsK0JBQStCO0lBQy9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLDBCQUFlLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNwRSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxxQkFBVSxFQUFFLENBQUM7QUFDbkMsQ0FBQyxDQUFDLENBQUM7QUFFSCxTQUFTLENBQUMsR0FBRyxFQUFFO0lBQ2IsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLHNCQUFzQixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQ3RDLE1BQU0sR0FBRyxHQUFHLElBQUkscUJBQWUsQ0FBQyxtQkFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFFakcsTUFBTSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQ3JFLE1BQU0sRUFBRSxhQUFhO1FBQ3JCLEdBQUcsRUFBRSxVQUFVO1FBQ2YsV0FBVyxFQUFFLGlCQUFpQjtLQUMvQixDQUFDLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU2VwYXJhdGUgdGVzdCBmaWxlIHNpbmNlIHRoZSBhcmNoaXZpbmcgbW9kdWxlIGRvZXNuJ3Qgd29yayB3ZWxsIHdpdGggJ21vY2stZnMnXG5pbXBvcnQgeyBNYW5pZmVzdCB9IGZyb20gJ0Bhd3MtY2RrL2Nsb3VkLWFzc2VtYmx5LXNjaGVtYSc7XG5pbXBvcnQgeyBBc3NldE1hbmlmZXN0LCBBc3NldFB1Ymxpc2hpbmcgfSBmcm9tICcuLi9saWInO1xuaW1wb3J0ICogYXMgYm9ja2ZzIGZyb20gJy4vYm9ja2ZzJztcbmltcG9ydCB7IG1vY2tBd3MsIG1vY2tlZEFwaVJlc3VsdCwgbW9ja1VwbG9hZCB9IGZyb20gJy4vbW9jay1hd3MnO1xuXG5sZXQgYXdzOiBSZXR1cm5UeXBlPHR5cGVvZiBtb2NrQXdzPjtcbmJlZm9yZUVhY2goKCkgPT4ge1xuICBib2NrZnMoe1xuICAgICcvc2ltcGxlL2Nkay5vdXQvYXNzZXRzLmpzb24nOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB2ZXJzaW9uOiBNYW5pZmVzdC52ZXJzaW9uKCksXG4gICAgICBmaWxlczoge1xuICAgICAgICB0aGVBc3NldDoge1xuICAgICAgICAgIHNvdXJjZToge1xuICAgICAgICAgICAgcGF0aDogJ3NvbWVfZGlyJyxcbiAgICAgICAgICAgIHBhY2thZ2luZzogJ3ppcCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXN0aW5hdGlvbnM6IHtcbiAgICAgICAgICAgIHRoZURlc3RpbmF0aW9uOiB7XG4gICAgICAgICAgICAgIHJlZ2lvbjogJ3VzLW5vcnRoLTUwJyxcbiAgICAgICAgICAgICAgYXNzdW1lUm9sZUFybjogJ2Fybjphd3M6cm9sZScsXG4gICAgICAgICAgICAgIGJ1Y2tldE5hbWU6ICdzb21lX2J1Y2tldCcsXG4gICAgICAgICAgICAgIG9iamVjdEtleTogJ3NvbWVfa2V5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgJy9zaW1wbGUvY2RrLm91dC9zb21lX2Rpci9zb21lX2ZpbGUnOiAnRklMRV9DT05URU5UUycsXG4gIH0pO1xuXG4gIGF3cyA9IG1vY2tBd3MoKTtcblxuICAvLyBBY2NlcHQgYWxsIFMzIHVwbG9hZHMgYXMgbmV3XG4gIGF3cy5tb2NrUzMubGlzdE9iamVjdHNWMiA9IG1vY2tlZEFwaVJlc3VsdCh7IENvbnRlbnRzOiB1bmRlZmluZWQgfSk7XG4gIGF3cy5tb2NrUzMudXBsb2FkID0gbW9ja1VwbG9hZCgpO1xufSk7XG5cbmFmdGVyRWFjaCgoKSA9PiB7XG4gIGJvY2tmcy5yZXN0b3JlKCk7XG59KTtcblxudGVzdCgnVGFrZSBhIHppcHBlZCB1cGxvYWQnLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHB1YiA9IG5ldyBBc3NldFB1Ymxpc2hpbmcoQXNzZXRNYW5pZmVzdC5mcm9tUGF0aChib2NrZnMucGF0aCgnL3NpbXBsZS9jZGsub3V0JykpLCB7IGF3cyB9KTtcblxuICBhd2FpdCBwdWIucHVibGlzaCgpO1xuXG4gIGV4cGVjdChhd3MubW9ja1MzLnVwbG9hZCkudG9IYXZlQmVlbkNhbGxlZFdpdGgoZXhwZWN0Lm9iamVjdENvbnRhaW5pbmcoe1xuICAgIEJ1Y2tldDogJ3NvbWVfYnVja2V0JyxcbiAgICBLZXk6ICdzb21lX2tleScsXG4gICAgQ29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi96aXAnLFxuICB9KSk7XG59KTtcbiJdfQ==